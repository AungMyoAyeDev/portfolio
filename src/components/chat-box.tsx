"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/src/components/ui/drawer";
import { Avatar, AvatarImage } from "./ui/avatar";

type Message = {
  role: "user" | "bot";
  content: string;
};

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      if (!res.ok) throw new Error("Network response failure");

      const data = await res.json();
      setMessages((prev) => [...prev, { role: "bot", content: data.reply }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content: "Something went wrong. Please try again later.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Drawer direction="right">
        <DrawerTrigger asChild>
          <Avatar className="cursor-pointer fixed right-4 bottom-4">
            <AvatarImage
              src="/aungmyoaye.jpg"
              alt="AI Assistant Avatar"
              className="rounded-full w-10 h-10"
            />
          </Avatar>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Portfolio AI Assistant</DrawerTitle>
            <DrawerDescription>
              {" "}
              {/* Main Chat Interface Viewports */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50">
                {messages.length === 0 && (
                  <p className="text-gray-400 text-center text-xs mt-8 italic">
                    Ask me about my projects, skills, or tech stack!
                  </p>
                )}

                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] p-3 rounded-xl text-sm shadow-sm ${
                        msg.role === "user"
                          ? "bg-blue-600 text-white rounded-br-none"
                          : "bg-white text-gray-800 border border-gray-100 rounded-bl-none"
                      }`}
                    >
                      {msg.role === "bot" ? (
                        // Parse AI output string cleanly into HTML with full Markdown rendering structures
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                          {msg.content}
                        </ReactMarkdown>
                      ) : (
                        <p className="whitespace-pre-wrap">{msg.content}</p>
                      )}
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white border border-gray-100 rounded-xl rounded-bl-none p-3 max-w-[85%] shadow-sm">
                      <span className="text-xs text-gray-400 italic animate-pulse">
                        Typing...
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            {/* User Prompt Input Section Form */}
            <form
              onSubmit={sendMessage}
              className="p-3 border-t border-gray-100 bg-white flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="What is your tech stack?"
                className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-40 transition-opacity"
              >
                Send
              </button>
            </form>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
