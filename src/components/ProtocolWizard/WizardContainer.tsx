import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Archetype } from '../../data/archetypes';
import { PhaseExcavation } from './PhaseExcavation';
import { PhaseInstallation } from './PhaseInstallation';
import { PhaseValidation } from './PhaseValidation';

interface WizardContainerProps {
    archetype: Archetype;
    journeyId: string;
}

type Phase = 'excavation' | 'installation' | 'validation';

export function WizardContainer({ archetype, journeyId }: WizardContainerProps) {
    const [phase, setPhase] = useState<Phase>('excavation');

    // Animation variants
    const variants = {
        enter: { opacity: 0, x: 50 },
        center: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -50 }
    };

    return (
        <div className="max-w-2xl mx-auto py-12 px-4">
            {/* Progress Indicator */}
            <div className="flex justify-center mb-12 space-x-4">
                {(['excavation', 'installation', 'validation'] as Phase[]).map((p, i) => (
                    <div key={p} className="flex flex-col items-center">
                        <div className={`
                w-3 h-3 rounded-full transition-all duration-500
                ${p === phase ? 'bg-primary scale-125' :
                                (['excavation', 'installation', 'validation'].indexOf(phase) > i) ? 'bg-primary/50' : 'bg-slate-200'}
             `} />
                        <span className={`text-[10px] uppercase font-bold mt-2 tracking-wider ${p === phase ? 'text-primary' : 'text-slate-300'}`}>
                            Phase {i + 1}
                        </span>
                    </div>
                ))}
            </div>

            <AnimatePresence mode='wait'>
                <motion.div
                    key={phase}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, type: 'spring', stiffness: 100 }}
                >
                    {phase === 'excavation' && (
                        <PhaseExcavation
                            archetype={archetype}
                            journeyId={journeyId}
                            onComplete={() => setPhase('installation')}
                        />
                    )}

                    {phase === 'installation' && (
                        <PhaseInstallation
                            archetype={archetype}
                            journeyId={journeyId}
                            onComplete={() => setPhase('validation')}
                        />
                    )}

                    {phase === 'validation' && (
                        <PhaseValidation
                            archetype={archetype}
                            journeyId={journeyId}
                        />
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
