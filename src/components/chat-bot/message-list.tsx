import { UIMessage } from "ai";
import { FC } from "react";
import ReactMarkDown from "react-markdown";
import remarkGfm from "remark-gfm";
type Props = {
  messages: UIMessage[];
  status: boolean;
};
const MessageLists: FC<Props> = ({ messages, status }) => {
  return (
    <>
      {messages.map((m) => (
        <div
          key={m.id}
          className={`flex gap-4 ${m.role === "user" ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`max-w-3/4  px-4 py-2 rounded-2xl ${m.role === "user" ? "bg-violet-600 text-white" : "border border-gray-500"}`}
          >
            {m.parts.map((p, i) => {
              if (p.type === "text") {
                return (
                  <ReactMarkDown key={i} remarkPlugins={[remarkGfm]}>
                    {p.text}
                  </ReactMarkDown>
                );
              }
            })}
            {status && m.role === "assistant" && (
              <span className="animate-pulse">|</span>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default MessageLists;
