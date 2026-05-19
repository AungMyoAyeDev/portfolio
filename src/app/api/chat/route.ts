import { PORTFOLIO_CONTEXT } from "@/src/lib/common";
import { google } from "@ai-sdk/google";
import {
  convertToModelMessages,
  ModelMessage,
  streamText,
  UIMessage,
} from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages }: { messages: UIMessage[] } = await req.json();
    console.log(messages, "message");
    const result = streamText({
      model: google("gemini-3-pro-preview"),

      system: PORTFOLIO_CONTEXT,
      temperature: 0.2,
      messages: await convertToModelMessages(messages),
      onError({ error }) {
        console.error(error);
      },
    });
    return result.toUIMessageStreamResponse();
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
