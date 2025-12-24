import { generateResponse } from "../helpers/LLM";
import * as chatRepository from "../repositories/chat";

export const getMessagesWithSessionId = (sessionId: string) => {
  try {
    return chatRepository.getMessagesWithSessionId(sessionId);
  } catch (err) {
    console.log("getMessagesWithSessionId Controller error: ", err);
  }
};

export const createNewReplyMessageToAnswerUser = async (
  sessionId: string,
  text: string
) => {
  try {
    if (!sessionId) {
      sessionId = await chatRepository.createNewConversation();
    }
    console.log('sessionId', sessionId);
    await chatRepository.createNewMessage(sessionId, text, "user");

    const chatHistory =
      (await chatRepository.getChatHistory(sessionId, 10)) || [];

    const knowledgeBase = (await chatRepository.getKnowledgeBase()) || [];

    const responseFromAI = await generateResponse(
      text,
      chatHistory,
      knowledgeBase
    );

    await chatRepository.createNewMessage(sessionId, responseFromAI, "ai");

    return {
      sessionId,
      reply: responseFromAI,
    };
  } catch (err) {
    console.log("createNewReplyMessageToAnswerUser Controller error: ", err);
  }
};

export default { getMessagesWithSessionId, createNewReplyMessageToAnswerUser };
