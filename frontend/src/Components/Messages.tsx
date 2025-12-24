import { useEffect, useRef } from "react";
import type { ChatMessage } from "../types";
import Message from "./Message";
import { scrollToBottom } from "../helpers/chatHelpers";

const Messages = ({
  messages,
  isErrorForMessages,
  isRequestingForMessages,
  isRequestingForReply,
}: {
  messages: ChatMessage[];
  isErrorForMessages: boolean;
  isRequestingForMessages: boolean;
  isRequestingForReply: boolean;
}) => {
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom(chatRef.current);
  }, [messages]);
  return (
    <div
      className="overflow-y-scroll p-4 rounded-b-md grow-1 hide-scrollbar border-y-2 w-[100%] border-gray-100 scroll-smooth"
      ref={chatRef}
    >
      {isRequestingForMessages ? (
        <div className="h-[100%] w-[100%] flex items-center justify-center">
          <span className="inline-block text-[var(--primary-color)] font-bold text-sm blink">
            Loading Messages ....
          </span>
        </div>
      ) : isErrorForMessages ? (
        <div className="h-[100%] w-[100%] flex items-center justify-center">
          <span className="inline-block bg-[var(--gray-color)] border-1 border-[var(--error-color)] rounded-md p-2  text-[var(--error-color)] font-bold text-sm">
            Error Loading Messages
          </span>
        </div>
      ) : (
        <>
          {messages?.map((msg, idx) => (
            <Message key={idx} index={idx} message={msg} />
          ))}
          {isRequestingForReply && (
            <span className="inline-block text-[var(--primary-color)] font-bold text-sm blink">
              AI Support is Typing ....
            </span>
          )}
        </>
      )}
    </div>
  );
};

export default Messages;
