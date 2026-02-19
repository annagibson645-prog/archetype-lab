import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Zap, Loader2 } from 'lucide-react';
import type { Archetype } from '../../types';
import { useJourney } from '../../hooks/useJourney';
import { streamChat, getStoredConfig } from '../../lib/openrouter';
import type { ChatMessage } from '../../lib/openrouter';

interface PhaseInstallationProps {
    archetype: Archetype;
    journeyId: string;
    onComplete: () => void;
}

export function PhaseInstallation({ archetype, journeyId, onComplete }: PhaseInstallationProps) {
    const { getJourney, updateInstallation } = useJourney();
    const journey = getJourney(journeyId);

    // State
    const [commitment, setCommitment] = useState(3);
    const [microTests, setMicroTests] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [hasKey, setHasKey] = useState(false);

    useEffect(() => {
        const config = getStoredConfig();
        setHasKey(!!config?.apiKey);

        // If we already have stored micro-tests (not implemented in types yet, but let's assume valid state), usage would be here.
        // For now, we generate fresh if empty.
        if (microTests.length === 0 && config?.apiKey && journey?.excavation?.identifiedBelief) {
            generateMicroTests(config.apiKey, journey.excavation.identifiedBelief);
        } else if (!config?.apiKey) {
            // Fallback to static if no key
            setMicroTests(archetype.prompts.installation.microTests);
        }
    }, [archetype, journey?.excavation?.identifiedBelief]);

    const generateMicroTests = async (apiKey: string, context: string) => {
        setIsLoading(true);
        setError(null);

        try {
            const prompt: ChatMessage[] = [
                {
                    role: 'system',
                    content: `You are ${archetype.name}. Based on the user's situation, generate 3 specific, actionable "Micro-Tests" for them to prove they have adopted your mindset.
                    - Context: ${context}
                    - Your Core Algorithm: "${archetype.algorithm}"
                    - Output Format: Return ONLY 3 bullet points. No intro, no outro.
                    - Tone: ${archetype.name}.`
                }
            ];

            await streamChat(
                prompt,
                { apiKey, model: 'openai/gpt-4o-mini' }, // Use fast model for generation
                () => { }, // No intermediate chunks needed really, but required by fn signature
                (fullText) => {
                    // Parse bullets
                    const lines = fullText.split('\n')
                        .map(line => line.replace(/^[\s-•*]+/, '').trim())
                        .filter(line => line.length > 0)
                        .slice(0, 3);

                    if (lines.length > 0) {
                        setMicroTests(lines);
                    } else {
                        setMicroTests(archetype.prompts.installation.microTests); // Fallback
                    }
                    setIsLoading(false);
                },
                (err) => {
                    console.error(err);
                    setError("Failed to generate custom tests. Using standard protocol.");
                    setMicroTests(archetype.prompts.installation.microTests);
                    setIsLoading(false);
                }
            );
        } catch (e) {
            setMicroTests(archetype.prompts.installation.microTests);
            setIsLoading(false);
        }
    };

    const handleCommit = () => {
        updateInstallation(journeyId, { commitmentLevel: commitment, customAdaptation: microTests.join('|') });
        onComplete();
    };

    return (
        <div className="space-y-8">
            <div className="text-center">
                <motion.div
                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                    className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                    <Zap className="w-8 h-8 text-blue-600" />
                </motion.div>
                <h2 className="text-3xl font-serif font-bold text-slate-900">Phase 2: Installation</h2>
                <p className="text-slate-600 max-w-lg mx-auto mt-2">
                    Overwrite your old pattern with {archetype.name}'s algorithm.
                </p>
            </div>

            <motion.div
                initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}
                className="glass-panel p-8 rounded-2xl bg-gradient-to-br from-white to-blue-50 border-blue-100 shadow-blue-100/50"
            >
                <h3 className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-2">New Algorithm</h3>
                <p className="text-2xl font-serif font-bold text-slate-800 leading-relaxed italic">
                    "{archetype.prompts.installation.framework}"
                </p>
            </motion.div>

            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider">
                        {isLoading ? 'Generating Custom Protocol...' : 'Your Micro-Tests'}
                    </h3>
                    {!hasKey && (
                        <span className="text-xs text-slate-400 bg-slate-100 px-2 py-1 rounded">
                            Standard Protocol (Connect AI for Custom)
                        </span>
                    )}
                </div>

                {isLoading ? (
                    <div className="flex justify-center py-12">
                        <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
                    </div>
                ) : (
                    <div className="grid md:grid-cols-3 gap-4">
                        <AnimatePresence mode="wait">
                            {microTests.map((test, i) => (
                                <motion.div
                                    key={test} // Use text as key effectively resets animation on change
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * i }}
                                    className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
                                >
                                    <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center mb-3 text-blue-600 font-bold text-sm">
                                        {i + 1}
                                    </div>
                                    <p className="text-sm text-slate-700 font-medium leading-relaxed">{test}</p>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                )}

                {error && (
                    <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg flex items-center gap-2">
                        <span>⚠️</span> {error}
                    </div>
                )}
            </div>

            <div className="glass-panel p-6 rounded-2xl mt-8">
                <label className="block text-sm font-semibold text-slate-700 mb-4">
                    Commitment Level
                </label>
                <input
                    type="range"
                    min="1"
                    max="5"
                    value={commitment}
                    onChange={(e) => setCommitment(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-2">
                    <span>Curious</span>
                    <span>Fully Committed</span>
                </div>
            </div>

            <div className="flex justify-end pt-4">
                <button
                    onClick={handleCommit}
                    disabled={isLoading}
                    className="flex items-center px-6 py-3 rounded-lg font-bold bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 shadow-md shadow-blue-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Install Protocol <ArrowRight className="ml-2 w-4 h-4" />
                </button>
            </div>
        </div>
    );
}
