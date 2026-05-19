"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useState } from "react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Home() {
  const [input, setInput] = useState("");

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
    }),
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input.trim()) return;
    console.log(input);
    sendMessage({
      parts: [{ type: "text", text: input }],
    });

    setInput("");
  };

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Portfolio AI Assistant</h1>

      <div className="space-y-4 mb-6">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`p-4 rounded-2xl max-w-[80%] ${
              message.role === "user"
                ? "bg-blue-500 text-white ml-auto"
                : "bg-zinc-100 text-black"
            }`}
          >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {message.parts
                ?.map((part) => (part.type === "text" ? part.text : ""))
                .join("") || ""}
            </ReactMarkdown>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about me..."
          className="flex-1 border rounded-xl px-4 py-3"
        />

        <button
          type="submit"
          disabled={status === "streaming"}
          className="bg-black text-white px-5 rounded-xl"
        >
          {status === "streaming" ? "Thinking..." : "Send"}
        </button>
      </form>
    </main>
  );
}
