import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Check } from 'lucide-react';
import type { Archetype } from '../../data/archetypes';
import { useJourney } from '../../hooks/useJourney';
import { useNavigate } from 'react-router-dom';

interface PhaseValidationProps {
    archetype: Archetype;
    journeyId: string;
}

export function PhaseValidation({ archetype, journeyId }: PhaseValidationProps) {
    const { completeJourney } = useJourney();
    const navigate = useNavigate();
    const [reflection, setReflection] = useState("");
    const [checks, setChecks] = useState([false, false]);

    const handleFinish = () => {
        completeJourney(journeyId, reflection);
        navigate('/'); // Or to a 'success' summary page
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

            <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Final Reflection (Optional)</label>
                <textarea
                    value={reflection}
                    onChange={(e) => setReflection(e.target.value)}
                    placeholder="How easily can I drop this framework if needed?"
                    className="w-full p-4 rounded-xl border border-slate-200 bg-white/50 focus:ring-2 focus:ring-green-400 outline-none"
                />
            </div>

            <div className="flex justify-center pt-8">
                <button
                    onClick={handleFinish}
                    disabled={!allChecked}
                    className={`
            px-8 py-4 rounded-full font-bold text-lg transition-all
            ${allChecked
                            ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg hover:shadow-green-200 hover:scale-105'
                            : 'bg-slate-200 text-slate-400 cursor-not-allowed'}
          `}
                >
                    Validate & Complete Protocol
                </button>
            </div>
        </div>
    );
}
