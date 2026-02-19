import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import type { Archetype } from '../../data/archetypes';
import { useJourney } from '../../hooks/useJourney';

interface PhaseInstallationProps {
    archetype: Archetype;
    journeyId: string;
    onComplete: () => void;
}

export function PhaseInstallation({ archetype, journeyId, onComplete }: PhaseInstallationProps) {
    const { updateInstallation } = useJourney();
    const [commitment, setCommitment] = useState(3);

    const handleCommit = () => {
        updateInstallation(journeyId, { commitmentLevel: commitment, customAdaptation: "" });
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
                <p className="text-2xl font-serif font-bold text-slate-800 leading-relaxed">
                    "{archetype.prompts.installation.framework}"
                </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-4">
                {archetype.prompts.installation.microTests.map((test, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * i + 0.3 }}
                        className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm"
                    >
                        <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center mb-3 text-slate-600 font-bold text-sm">
                            {i + 1}
                        </div>
                        <p className="text-sm text-slate-600">{test}</p>
                    </motion.div>
                ))}
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
                    className="flex items-center px-6 py-3 rounded-lg font-bold bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 shadow-md shadow-blue-200 transition-all"
                >
                    Install Protocol <ArrowRight className="ml-2 w-4 h-4" />
                </button>
            </div>
        </div>
    );
}
