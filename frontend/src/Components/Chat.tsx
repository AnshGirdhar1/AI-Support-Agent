import { useEffect, useState, type FormEvent } from "react";
import type { ChatMessage } from "../types";
import Messages from "./Messages";
import SendMessageForm from "./SendMessageForm";
import {
  fetchAllMessagesWithSessionId,
  sendUserMessage,
} from "../apis/chatApis";

const Chat = () => {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<ChatMessage[] | any[]>([]);
  const [isRequestingForReply, setIsRequesting] = useState<boolean>(false);
  const [isRequestingForMessages, setIsRequestingForMessages] = useState(false);
  const [isErrorForMessages, setIsErrorForMessages] = useState(false);
  const [sessionId, setSessionId] = useState<string>(
    sessionStorage.getItem("sessionId") || ""
  );

  const getMessages = async () => {
    try {
      setIsErrorForMessages(false);
      setIsRequestingForMessages(true);

      const response = await fetchAllMessagesWithSessionId(sessionId);
      setMessages([...response]);

      setIsRequestingForMessages(false);
    } catch (error) {
      setIsRequestingForMessages(false);
      setIsErrorForMessages(true);
    }
  };

  const sendMessage = async (e: FormEvent) => {
    try {
      e.preventDefault();

      if (!message.trim()) return;

      const data: ChatMessage = {
        text: message,
        sessionId: sessionId,
        sender: "user",
      };
      setMessages((prev) => [...prev, data]);
      setMessage("");
      setIsRequesting(true);

      const response = await sendUserMessage(data);
      const messageReplyFromResponse = response?.reply;
      const sessionIdFromResponse = response?.sessionId || "";

      setSessionId(sessionIdFromResponse);
      sessionStorage.setItem("sessionId", sessionIdFromResponse);
      setMessages((prev) => [
        ...prev,
        {
          text: messageReplyFromResponse,
          sessionId: sessionIdFromResponse,
          sender: "ai",
        },
      ]);
      setIsRequesting(false);
    } catch (error: any) {
      setIsRequesting(false);
      setMessages((prev) => [
        ...prev,
        {
          text: error?.response?.data?.error,
          sessionId: sessionId,
          sender: "ai",
        },
      ]);
    }
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <div className="bg-[var(--gray-color)] h-[100vh] p-4">
      <div className="m-auto flex flex-col items-center h-[100%] bg-white w-[400px] rounded-md shadow-sm ">
        <h2 className="p-4 font-bold text-2xl">Chat With AI Support</h2>
        <Messages
          messages={messages}
          isErrorForMessages={isErrorForMessages}
          isRequestingForMessages={isRequestingForMessages}
          isRequestingForReply={isRequestingForReply}
        />
        <SendMessageForm
          message={message}
          isRequestingForReply={isRequestingForReply}
          sendMessage={sendMessage}
          setMessage={setMessage}
        />
      </div>
    </div>
  );
};

export default Chat;
