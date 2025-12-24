export interface ChatMessage {
  text: string;
  sender?: "user" | "ai";
  sessionId: string;
}

export interface ChatResponse extends ChatMessage {
  reply: string;
}
