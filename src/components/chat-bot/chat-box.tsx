"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/src/components/ui/drawer";
import { useChat } from "@ai-sdk/react";
import { Bot, Navigation } from "lucide-react";
import { Button } from "../ui/button";
import MessageLists from "./message-list";
import TypingIndicator from "./typing-indicator";
import ChatIntitial from "./chat-intailal";
export default function Chatbot() {
  const { messages, sendMessage, status, error } = useChat();
  const [input, setInput] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    sendMessage({ text: input });
    setInput("");
  };

  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  return (
    <div>
      <Drawer direction="right">
        <DrawerTrigger className="text-primary bg-card border-2 border-border shadow-sm p-1.5 rounded-full cursor-pointer fixed right-12 bottom-12 z-50">
          <Bot className="w-8 h-8  " />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Portfolio Assistant</DrawerTitle>
          </DrawerHeader>
          {/* Main Chat Interface Viewports */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-background no-scrollbar  ">
            {messages.length === 0 && <ChatIntitial setInput={setInput} />}

            <MessageLists messages={messages} status={status === "streaming"} />

            {status === "submitted" && <TypingIndicator />}

            {error && (
              <div className="w-3/4 rounded-2xl px-4 py-2 text-rose-500">
                {error.message}
              </div>
            )}
            <div ref={scrollRef} />
          </div>
          <DrawerFooter>
            <form
              onSubmit={handleSubmit}
              className="p-2 h-12 flex gap-2 items-center bg-background border border-primary rounded-full"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything ?"
                className="flex-1 bg-none bg-transparent border-none outline-none text-sm px-4"
                disabled={status === "submitted"}
              />
              {input.trim() && (
                <Button
                  type="submit"
                  variant={"default"}
                  size={"icon"}
                  disabled={!input.trim()}
                  className="rounded-full"
                >
                  <Navigation className="w-5 " />
                </Button>
              )}
            </form>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
