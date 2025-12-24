import type { FormEventHandler } from "react";

const SendMessageForm = ({
  message,
  isRequestingForReply,
  sendMessage,
  setMessage,
}: {
  message: string;
  isRequestingForReply: boolean;
  sendMessage: FormEventHandler;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <form onSubmit={sendMessage} className="w-[100%]">
      <div className="p-4 flex flex-col gap-2 w-[100%] flex-wrap">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          maxLength={500}
          placeholder="Type a message"
          className="bg-[var(--gray-color)] grow-1 rounded-sm p-2 inline-block border-none outline-2 outline-gray-50 focus:outline-[var(--primary-color)] mb-2"
        />
        <button
          type="submit"
          disabled={isRequestingForReply}
          className="bg-[var(--primary-color)] px-10 rounded-sm py-2 text-white font-semibold cursor-pointer shadow-md disabled:opacity-50 disabled:cursor-not-allowed active:bg-[var(--active-color)]"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default SendMessageForm;
