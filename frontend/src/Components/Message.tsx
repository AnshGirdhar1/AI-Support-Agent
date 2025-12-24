import type { ChatMessage } from "../types";
import ReactMarkdown from "react-markdown";

const Message = ({
  message,
  index,
}: {
  message: ChatMessage;
  index: number;
}) => {
  const IssenderUser = message?.sender === "user";
  return (
    <div
      className={`flex flex-col pb-4 ${
        IssenderUser ? "items-end" : "items-start"
      }`}
    >
      <div className="flex items-center gap-2 pb-2">
        <span className="rounded-full flex justify-center items-center font-semibold w-[30px] h-[30px] bg-[var(--gray-color)] text-[var(--primary-color)]">
          {IssenderUser ? "U" : "A"}
        </span>
        <span className="font-semibold">{IssenderUser ? "You" : "AI"}</span>
      </div>
      <div
        className={`py-2 px-3 rounded-sm inline-block break-all ${
          IssenderUser
            ? "bg-[var(--primary-color)] text-white"
            : "bg-[var(--gray-color)]"
        }`}
        key={index}
      >
        <ReactMarkdown>{message?.text}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Message;
