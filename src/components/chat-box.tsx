"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
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
import { useChat } from "@ai-sdk/react";
import { Bot, Navigation } from "lucide-react";
import { Button } from "./ui/button";

export default function Chatbot() {
  const { messages, sendMessage, status } = useChat();
  // const [messages, setMessages] = useState<Message[]>([]);
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
        <DrawerTrigger className="bg-primary p-2 rounded-full cursor-pointer fixed right-12 bottom-12 z-50">
          <Bot className="w-8 h-8  " />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Portfolio AI Assistant</DrawerTitle>
            <DrawerDescription> </DrawerDescription>
          </DrawerHeader>
          {/* Main Chat Interface Viewports */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-background no-scrollbar  ">
            {messages.length === 0 && (
              <div>
                <p className="text-gray-400 text-center text-xs mt-4 ">
                  Ask me about my projects, skills, or tech stack!
                </p>
                <div className="flex gap-4 mt-4 justify-center">
                  <Button
                    variant={"secondary"}
                    size={"sm"}
                    onClick={() => setInput("Tell me about his Projects ?")}
                  >
                    Projects
                  </Button>
                  <Button
                    variant={"secondary"}
                    size={"sm"}
                    onClick={() => setInput("Tell me about his skills ?")}
                  >
                    Skills
                  </Button>
                  <Button
                    variant={"secondary"}
                    size={"sm"}
                    onClick={() => setInput("Tell me about his background ?")}
                  >
                    Background
                  </Button>
                </div>
              </div>
            )}

            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex  ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {m.parts.map((p, i) => {
                  if (p.type === "text") {
                    return (
                      <p
                        key={i}
                        className={`max-w-3/4  px-4 py-2 rounded-2xl ${m.role === "user" ? "bg-violet-600 text-white" : "border border-gray-500"}`}
                      >
                        {p.text}
                      </p>
                    );
                  }
                })}
              </div>
            ))}
            <div ref={scrollRef} />

            {status === "submitted" && (
              <div className="flex justify-start">
                <div className="bg-card border border-border rounded-xl rounded-bl-none p-3 max-w-[85%] shadow-sm">
                  <span className="text-xs text-gray-400 italic animate-pulse">
                    Typing...
                  </span>
                </div>
              </div>
            )}
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
                placeholder="What is your tech stack?"
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
