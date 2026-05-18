import { streamText } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Use Vercel AI Gateway to route the request to Gemini.
    // Because this runs on the server (Vercel's infrastructure), it bypasses regional blocks.
    const result = streamText({
      model: "google/gemini-1.5-flash",
      messages,
      // The system prompt strictly defines the persona and constraints
      system: `You are an AI assistant integrated into a personal developer portfolio. Your ONLY job is to answer questions about the portfolio owner.
      
      Here is the context about the owner:
      - Self-taught Full Stack Developer programming since 2023.
      - Currently a student at Yadanabon University.
      - Core tech stack: Next.js, React, TypeScript, Tailwind CSS, Go.
      - Key Interests: Backend architecture, Docker, CI/CD, JWT/Bearer token authentication, database optimization, MVC/BFF patterns.
      - Projects: Refactored a hotel booking management system (JWT, RBAC), and currently building a Q&A application named DevSyncMM.

      CRITICAL RULES:
      1. If the user asks ANY question unrelated to the owner's professional background, skills, projects, or education, you MUST reply exactly with: "Please ask related about me". Do not apologize, do not explain further, and do not add any extra text.
      2. Always format your valid responses using standard Markdown (e.g., bullet points, bold text, code blocks if necessary).`,
      // Temperature controls randomness. We keep it low so it strictly follows rules.
      temperature: 0.2,
    });

    // streamText automatically handles the conversion to a streaming response
    return result.toDataStreamResponse();
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
