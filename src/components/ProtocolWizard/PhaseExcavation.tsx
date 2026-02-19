import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Brain, Send, AlertCircle } from 'lucide-react';
import type { Archetype } from '../../types';
import { useJourney } from '../../hooks/useJourney';
import { streamChat, getStoredConfig } from '../../lib/openrouter';
import type { ChatMessage } from '../../lib/openrouter';

interface PhaseExcavationProps {
    archetype: Archetype;
    journeyId: string;
    onComplete: () => void;
}

export function PhaseExcavation({ archetype, journeyId, onComplete }: PhaseExcavationProps) {
    const { updateExcavation } = useJourney();

    // State
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [input, setInput] = useState('');
    const [isStreaming, setIsStreaming] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [hasKey, setHasKey] = useState(false);

    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Initial Setup
    useEffect(() => {
        const config = getStoredConfig();
        setHasKey(!!config?.apiKey);

        if (messages.length === 0) {
            // System Prompt + Initial greeting
            const initialMessages: ChatMessage[] = [
                {
                    role: 'system',
                    content: `You are ${archetype.name} (Archetype: ${archetype.subtitle}). 
                    Your Goal: Help the user excavate their limiting beliefs regarding '${archetype.prompts.excavation.question}'.
                    Style: ${archetype.algorithm}. Speak directly, with the tone of ${archetype.name}. 
                    Be insightful, probing, and relentless but compassionate. 
                    Do not lecture. Ask short, piercing questions.
                    
                    Start by asking the user: "${archetype.prompts.excavation.question}"`
                },
                {
                    role: 'assistant',
                    content: archetype.prompts.excavation.question
                }
            ];
            setMessages(initialMessages);
        }
    }, [archetype]);

    // Scroll to bottom
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isStreaming]);

    const handleSend = async () => {
        if (!input.trim() || isStreaming) return;

        const config = getStoredConfig();
        if (!config?.apiKey) {
            setError("Please add your API Key in Settings (bottom right) to continue.");
            return;
        }

        const userMsg: ChatMessage = { role: 'user', content: input };
        const newMessages = [...messages, userMsg];

        setMessages(newMessages);
        setInput('');
        setIsStreaming(true);
        setError(null);

        // Add placeholder for assistant
        setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

        try {
            await streamChat(
                newMessages,
                config,
                (chunk) => {
                    setMessages(prev => {
                        const last = prev[prev.length - 1];
                        if (last.role === 'assistant') {
                            return [...prev.slice(0, -1), { ...last, content: last.content + chunk }];
                        }
                        return prev;
                    });
                },
                (fullText) => {
                    setIsStreaming(false);
                    // Save context to journey for next phase
                    updateExcavation(journeyId, {
                        situation: "Chat Session",
                        identifiedBelief: fullText.slice(0, 200) + "..." // Store last response as summary for now
                    });
                },
                (err) => {
                    setIsStreaming(false);
                    setError(err.message);
                }
            );
        } catch (e) {
            setIsStreaming(false);
            setError("Failed to send message.");
        }
    };

    // Allow manual completion if chat is long enough
    const canComplete = messages.length > 4 && !isStreaming;

    return (
        <div className="flex flex-col h-[600px] bg-white/50 backdrop-blur-md rounded-2xl border border-white/40 shadow-xl overflow-hidden relative">

            {/* Header */}
            <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-white/60">
                <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br ${archetype.color} text-white shadow-sm`}>
                        <Brain className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-800">{archetype.name}</h3>
                        <p className="text-xs text-slate-500 font-medium">Excavation Phase</p>
                    </div>
                </div>

                {canComplete && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        onClick={onComplete}
                        className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-semibold hover:bg-slate-800 transition-colors shadow-md"
                    >
                        Analyze Findings <ArrowRight className="w-4 h-4" />
                    </motion.button>
                )}
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
                {messages.slice(1).map((msg, idx) => ( // Skip system prompt
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div className={`
                            max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm
                            ${msg.role === 'user'
                                ? 'bg-indigo-600 text-white rounded-br-none'
                                : 'bg-white text-slate-700 border border-slate-100 rounded-bl-none'}
                        `}>
                            {msg.role === 'assistant' && (
                                <p className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">
                                    {archetype.name}
                                </p>
                            )}
                            {msg.content}
                        </div>
                    </motion.div>
                ))}

                {/* Typing Indicator */}
                {isStreaming && (
                    <div className="flex justify-start">
                        <div className="bg-white border border-slate-100 px-4 py-3 rounded-2xl rounded-bl-none shadow-sm flex gap-1">
                            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 0.6 }} className="w-2 h-2 bg-slate-300 rounded-full" />
                            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-2 h-2 bg-slate-300 rounded-full" />
                            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-2 h-2 bg-slate-300 rounded-full" />
                        </div>
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            {/* Error Banner */}
            <AnimatePresence>
                {error && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="absolute bottom-20 left-4 right-4 bg-red-50 border border-red-200 text-red-700 p-3 rounded-lg text-sm flex items-center gap-2 shadow-lg z-10"
                    >
                        <AlertCircle className="w-4 h-4" />
                        {error}
                        {!hasKey && (
                            <button
                                onClick={() => document.querySelector('button[title="AI Settings"]')?.dispatchEvent(new MouseEvent('click', { bubbles: true }))} // Hacky trigger but works for now
                                className="underline font-bold ml-auto"
                            >
                                Open Settings
                            </button>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Input Area */}
            <div className="p-4 bg-white/80 backdrop-blur-md border-t border-slate-100">
                <div className="relative">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        placeholder={hasKey ? "Type your answer..." : "Connect API Key to start..."}
                        className="w-full pl-4 pr-12 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none shadow-sm transition-all"
                    />
                    <button
                        onClick={handleSend}
                        disabled={!input.trim() || isStreaming}
                        className="absolute right-2 top-2 p-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors"
                    >
                        <Send className="w-4 h-4" />
                    </button>
                </div>
                {!hasKey && (
                    <p className="text-xs text-center mt-2 text-slate-400">
                        Response generated by AI. Requires OpenRouter API Key.
                    </p>
                )}
            </div>
        </div>
    );
}
