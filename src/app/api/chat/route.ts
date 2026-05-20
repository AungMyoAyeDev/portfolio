import { PORTFOLIO_CONTEXT } from "@/src/lib/common";
import { google } from "@ai-sdk/google";
import {
  convertToModelMessages,
  ModelMessage,
  streamText,
  UIMessage,
} from "ai";
import { NextResponse } from "next/server";
import OpenAI from "openai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
  defaultHeaders: {
    "HTTP-Referer": "http://localhost:3000", // Optional but recommended by OpenRouter
    "X-Title": "Portfolio Chatbot",
  },
});
export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    console.log(messages, "message");
    const res = await openai.chat.completions.create({
      model: "openrouter/free",
      messages: [
        {
          role: "system",
          content: PORTFOLIO_CONTEXT,
        },
        {
          role: "user",
          content: messages,
        },
      ],
      temperature: 0.2,
    });
    const result = res.choices[0].message.content || "No response";
    return NextResponse.json({ reply: result });
  } catch (error) {
    console.error("Chat API Error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to process chat message" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
