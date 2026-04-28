// app/api/chat/route.ts
import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
    const { messages } = await req.json();

    const result = await streamText({
        model: google('models/gemini-1.5-flash-latest'),
        messages,
        system: "You are a helpful AI assistant on a developer's portfolio website. Keep answers concise and friendly.",
    });

    return result.toTextStreamResponse();
}