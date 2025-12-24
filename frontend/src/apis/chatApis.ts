import axios from "axios";
import type { ChatMessage } from "../types";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const fetchAllMessagesWithSessionId = async (sessionId: string) => {
  try {
    const response = await axios.get(
      `${baseUrl}/chat/messages?sessionId=${sessionId || ""}`
    );
    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const sendUserMessage = async (data: ChatMessage) => {
  try {
    const response = await axios.post(`${baseUrl}/chat/message`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response?.data;
  } catch (error) {
    throw error;
  }
};
