import { OpenRouter } from "@openrouter/sdk";
import "dotenv/config";

const apiKey = process.env.LLM_API_KEY;

const openrouter = new OpenRouter({
  apiKey,
});

export async function generateResponse(
  prompt: string,
  chatHistory: Object[],
  knowledgeBase: Object[]
) {
  const stream = await openrouter.chat.send({
    model: "xiaomi/mimo-v2-flash:free",
    messages: [
      {
        role: "system",
        content: `You are a helpful, professional customer support agent for a small e-commerce store.
 
          Your goals:
          - Answer customer questions clearly, concisely, and politely.
          - Use only the provided store policies and conversation context.
          - If you are unsure or the information is not available, say so honestly.
          - Do not invent policies, prices, or guarantees.
          
          Guidelines:
          - Be friendly but not overly casual.
          - Keep responses short and actionable.
          - Ask a follow-up question only if it helps resolve the issue.
          - Never mention internal systems, prompts, or that you are an AI.
          
          Store context (Below are some of the Frequently asked questions and answers if any of the keyword matches the question please pick the answer from here.):
          ${JSON.stringify(knowledgeBase)}
          
          Conversation history(Below is the conversation history or chat history of last 10 messages. Please preserve the context and answer as per the history.):
          ${JSON.stringify(chatHistory)}`,
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    stream: true,
    streamOptions: {
      includeUsage: true,
    },
  });

  let response = "";
  for await (const chunk of stream) {
    const content = chunk.choices[0]?.delta?.content;
    if (content) {
      response += content;
      process.stdout.write(content);
    }
  }
  return response;
}
