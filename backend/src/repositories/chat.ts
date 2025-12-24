import db from "../dbConnection";

export const getMessagesWithSessionId = async (
  sessionId: string,
  limit?: number | undefined
) => {
  try {
    const messages = db("messages")
      .select("*")
      .where("conversationId", sessionId);
    if (limit) {
      messages.limit(limit);
    }
    messages.orderBy("messages.created_at", "asc");
    return await messages;
  } catch (err) {
    console.log("getMessagesWithSessionId Repository error: ", err);
  }
};

export const createNewConversation = async () => {
  try {
    const ids = await db("conversations").insert({}).returning("id");
    return ids[0]?.id;
  } catch (err) {
    console.log("createNewConversation Repository error: ", err);
  }
};

export const createNewMessage = async (
  sessionId: string,
  text: string,
  sender: "user" | "ai"
) => {
  try {
    const ids = await db("messages")
      .insert({
        conversationId: sessionId,
        sender,
        text,
      })
      .returning("id");
    return ids[0]?.id;
  } catch (err) {
    console.log("createNewMessage Repository error: ", err);
  }
};

export const getChatHistory = async (sessionId: string, limit: number = 10) => {
  try {
    return await getMessagesWithSessionId(sessionId, limit);
  } catch (err) {
    console.log("getChatHistory Repository error: ", err);
  }
};

export const getKnowledgeBase = async () => {
  try {
    const knowledgeBase = await db("knowledge_base").select("*");
    return knowledgeBase;
  } catch (err) {
    console.log("getKnowledgeBase Repository error: ", err);
  }
};

export default { getMessagesWithSessionId, createNewConversation };
