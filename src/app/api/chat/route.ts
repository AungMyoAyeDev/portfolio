import { PORTFOLIO_CONTEXT } from "@/src/lib/common";
import { createOpenAI } from "@ai-sdk/openai";
import { convertToModelMessages, streamText, UIMessage } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

const openrouter = createOpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
  headers: {
    "HTTP-Referer": process.env.PROD_URL || "http://localhost:3000", // Optional but recommended by OpenRouter
    "X-Title": "Portfolio Chatbot",
  },
});

export async function POST(req: Request) {
  try {
    const { messages }: { messages: UIMessage[] } = await req.json();
    const res = streamText({
      model: openrouter("openrouter/free"),
      system: PORTFOLIO_CONTEXT,
      messages: await convertToModelMessages(messages),
      temperature: 0.2,
    });

    return res.toUIMessageStreamResponse();
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
