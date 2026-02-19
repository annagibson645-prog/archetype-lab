import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain } from 'lucide-react';
import type { Archetype } from '../../types';
import { useJourney } from '../../hooks/useJourney';

interface PhaseExcavationProps {
    archetype: Archetype;
    journeyId: string;
    onComplete: () => void;
}

export function PhaseExcavation({ archetype, journeyId, onComplete }: PhaseExcavationProps) {
    const { getJourney, updateExcavation } = useJourney();
    const journey = getJourney(journeyId);

    const [situation, setSituation] = useState(journey?.excavation?.situation || "");
    const [belief, setBelief] = useState(journey?.excavation?.identifiedBelief || "");

    // Auto-save debounced would be ideal, but for MVP we save on change or unmount
    useEffect(() => {
        if (situation || belief) {
            updateExcavation(journeyId, { situation, identifiedBelief: belief });
        }
    }, [situation, belief]);

    const canProceed = situation.length > 10 && belief.length > 5;

    return (
        <div className="space-y-8">
            <div className="text-center">
                <motion.div
                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                    className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                    <Brain className="w-8 h-8 text-yellow-600" />
                </motion.div>
                <h2 className="text-3xl font-serif font-bold text-slate-900">Phase 1: Excavation</h2>
                <p className="text-slate-600 max-w-lg mx-auto mt-2">
                    Identify the hidden script running your current reaction.
                </p>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="glass-panel p-8 rounded-2xl space-y-6"
            >
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                        The Situation
                    </label>
                    <p className="text-sm text-slate-500 italic mb-2">
                        "{archetype.prompts.excavation.question}"
                    </p>
                    <textarea
                        value={situation}
                        onChange={(e) => setSituation(e.target.value)}
                        placeholder="I felt anxious when..."
                        className="w-full p-4 rounded-xl border border-slate-200 bg-white/50 focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none min-h-[100px]"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                        The Hidden Belief
                    </label>
                    <p className="text-sm text-slate-500 italic mb-2">
                        "{archetype.prompts.excavation.helper}"
                    </p>
                    <textarea
                        value={belief}
                        onChange={(e) => setBelief(e.target.value)}
                        placeholder="I believe that if I don't..."
                        className="w-full p-4 rounded-xl border border-slate-200 bg-white/50 focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none min-h-[100px]"
                    />
                </div>

                <div className="pt-4 flex justify-end">
                    <button
                        onClick={onComplete}
                        disabled={!canProceed}
                        className={`
              flex items-center px-6 py-3 rounded-lg font-bold transition-all
              ${canProceed
                                ? 'bg-yellow-500 text-white hover:bg-yellow-600 hover:scale-105 shadow-md'
                                : 'bg-slate-200 text-slate-400 cursor-not-allowed'}
            `}
                    >
                        Uncover Algorithm <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                </div>
            </motion.div>
        </div>
    );
}
