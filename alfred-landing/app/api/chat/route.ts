import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest } from "next/server";

export const dynamic = 'force-dynamic';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: NextRequest) {
    try {
        const { messages, systemInstruction } = await req.json();

        // Convert messages to Gemini format (user vs model)
        // Gemini requires the history to start with a 'user' message.
        // If the first message is from the model (e.g. welcome message), we skip it.
        let parsedHistory = messages.slice(0, -1).map((msg: any) => ({
            role: msg.role === 'user' ? 'user' : 'model',
            parts: [{ text: msg.text }],
        }));

        if (parsedHistory.length > 0 && parsedHistory[0].role === 'model') {
            parsedHistory = parsedHistory.slice(1);
        }

        const latestMessage = messages[messages.length - 1].text;

        const model = genAI.getGenerativeModel({
            model: "gemini-2.5-flash",
            // You can pass the instruction if available based on recent SDK features
            systemInstruction: systemInstruction,
        });

        // Start a chat session with the previous history
        const chat = model.startChat({
            history: parsedHistory,
        });

        const result = await chat.sendMessageStream(latestMessage);

        const encoder = new TextEncoder();
        const stream = new ReadableStream({
            async start(controller) {
                try {
                    for await (const chunk of result.stream) {
                        const text = chunk.text();
                        controller.enqueue(encoder.encode(text));
                    }
                    controller.close();
                } catch (err) {
                    controller.error(err);
                }
            }
        });

        return new Response(stream, {
            headers: {
                "Content-Type": "text/plain",
                "Transfer-Encoding": "chunked",
            },
        });

    } catch (error) {
        console.error("Chat API Error:", error);
        return new Response(JSON.stringify({ error: "Failed to generate response" }), { status: 500 });
    }
}
