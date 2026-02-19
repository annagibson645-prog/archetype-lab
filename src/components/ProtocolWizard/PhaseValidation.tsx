import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Check, Loader2, Sparkles } from 'lucide-react';
import type { Archetype } from '../../types';
import { useJourney } from '../../hooks/useJourney';
import { useNavigate } from 'react-router-dom';
import { streamChat, getStoredConfig } from '../../lib/openrouter';
import type { ChatMessage } from '../../lib/openrouter';

interface PhaseValidationProps {
    archetype: Archetype;
    journeyId: string;
}

export function PhaseValidation({ archetype, journeyId }: PhaseValidationProps) {
    const { completeJourney } = useJourney();
    const navigate = useNavigate();
    // const journey = getJourney(journeyId); // Unused in this phase for now

    const [reflection, setReflection] = useState("");
    const [checks, setChecks] = useState([false, false]);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [aiFeedback, setAiFeedback] = useState<string | null>(null);
    const [hasKey, setHasKey] = useState(false);

    useEffect(() => {
        const config = getStoredConfig();
        setHasKey(!!config?.apiKey);
    }, []);

    const handleFinish = async () => {
        if (!reflection.trim()) return;

        const config = getStoredConfig();

        if (config?.apiKey && hasKey) {
            // AI Analysis
            setIsAnalyzing(true);
            try {
                const prompt: ChatMessage[] = [
                    {
                        role: 'system',
                        content: `You are ${archetype.name}. The user has completed your protocol and written a reflection.
                        - User Reflection: "${reflection}"
                        - Protocol: "${archetype.algorithm}"
                        - Context: They have just finished installed this mindset.
                        - Goal: Give them a final blessing or short, sharp piece of advice to carry forward.
                        - Format: Short paragraph (max 2 sentences).
                        - Tone: ${archetype.name}.`
                    }
                ];

                await streamChat(
                    prompt,
                    config,
                    () => { },
                    (fullText) => {
                        setAiFeedback(fullText);
                        setIsAnalyzing(false);
                        completeJourney(journeyId, reflection);
                    },
                    (err) => {
                        console.error(err);
                        completeJourney(journeyId, reflection);
                        navigate('/');
                    }
                );
            } catch (e) {
                completeJourney(journeyId, reflection);
                navigate('/');
            }
        } else {
            // Manual Finish
            completeJourney(journeyId, reflection);
            navigate('/');
        }
    };

    const allChecked = checks.every(Boolean);

    return (
        <div className="space-y-8">
            <div className="text-center">
                <motion.div
                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                    className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                    <Layers className="w-8 h-8 text-green-600" />
                </motion.div>
                <h2 className="text-3xl font-serif font-bold text-slate-900">Phase 3: Validation</h2>
                <p className="text-slate-600 max-w-lg mx-auto mt-2">
                    Ensure you are using the tool, finding the balance between sovereignty and structure.
                </p>
            </div>

            <motion.div
                className="glass-panel p-8 rounded-2xl space-y-4"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            >
                <div className="flex items-start gap-3 p-3 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer" onClick={() => setChecks([!checks[0], checks[1]])}>
                    <div className={`mt-1 w-5 h-5 rounded border flex items-center justify-center ${checks[0] ? 'bg-green-500 border-green-500 text-white' : 'border-slate-300'}`}>
                        {checks[0] && <Check className="w-3 h-3" />}
                    </div>
                    <p className="text-slate-700">{archetype.prompts.validation.check1}</p>
                </div>

                <div className="flex items-start gap-3 p-3 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer" onClick={() => setChecks([checks[0], !checks[1]])}>
                    <div className={`mt-1 w-5 h-5 rounded border flex items-center justify-center ${checks[1] ? 'bg-green-500 border-green-500 text-white' : 'border-slate-300'}`}>
                        {checks[1] && <Check className="w-3 h-3" />}
                    </div>
                    <p className="text-slate-700">{archetype.prompts.validation.check2}</p>
                </div>
            </motion.div>

            <AnimatePresence mode='wait'>
                {aiFeedback ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 p-8 rounded-2xl text-center space-y-4 relative overflow-hidden"
                    >
                        <Sparkles className="w-8 h-8 text-green-500 mx-auto absolute top-4 right-4 opacity-20" />
                        <h3 className="font-serif font-bold text-green-800 text-xl">Protocol Complete</h3>
                        <p className="text-slate-700 italic leading-relaxed">
                            "{aiFeedback}"
                        </p>
                        <button
                            onClick={() => navigate('/')}
                            className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold text-sm"
                        >
                            Return to Library
                        </button>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-2"
                    >
                        <label className="text-sm font-semibold text-slate-700 flex justify-between">
                            <span>Final Reflection</span>
                            {!hasKey && <span className="text-xs text-slate-400 font-normal">Static Mode</span>}
                        </label>
                        <textarea
                            value={reflection}
                            onChange={(e) => setReflection(e.target.value)}
                            placeholder="What did I learn? How easily can I drop this framework?"
                            className="w-full p-4 rounded-xl border border-slate-200 bg-white/50 focus:ring-2 focus:ring-green-400 outline-none min-h-[120px]"
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {!aiFeedback && (
                <div className="flex justify-center pt-8">
                    <button
                        onClick={handleFinish}
                        disabled={!allChecked || !reflection.trim() || isAnalyzing}
                        className={`
                            px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-2
                            ${allChecked && reflection.trim() && !isAnalyzing
                                ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg hover:shadow-green-200 hover:scale-105'
                                : 'bg-slate-200 text-slate-400 cursor-not-allowed'}
                        `}
                    >
                        {isAnalyzing ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Analyzing...
                            </>
                        ) : (
                            'Validate & Complete Protocol'
                        )}
                    </button>
                </div>
            )}
        </div>
    );
}
