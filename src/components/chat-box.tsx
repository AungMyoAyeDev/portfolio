'use client';

import { useChat } from '@ai-sdk/react';

export default function ChatBot() {
    const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();

    return (
        <div className="flex flex-col w-full max-w-md h-[500px] border border-gray-300 rounded-lg overflow-hidden bg-white shadow-lg mx-auto">
            {/* Header */}
            <div className="bg-blue-600 text-white p-4 font-bold text-lg">
                Portfolio Assistant
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((m) => (
                    <div
                        key={m.id}
                        className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                            className={`p-3 rounded-lg max-w-[80%] ${m.role === 'user'
                                ? 'bg-blue-500 text-white rounded-br-none'
                                : 'bg-gray-100 text-gray-800 rounded-bl-none'
                                }`}
                        >
                            {m.content}
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="text-gray-500 text-sm animate-pulse">AI is thinking...</div>
                )}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 bg-gray-50 flex gap-2">
                <input
                    className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                    value={input}
                    placeholder="Ask me about my projects..."
                    onChange={handleInputChange}
                    disabled={isLoading}
                />
                <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-blue-300 transition-colors"
                >
                    Send
                </button>
            </form>
        </div>
    );
}