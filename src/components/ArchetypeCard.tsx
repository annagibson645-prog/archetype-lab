import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import type { Archetype } from '../data/archetypes';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

interface ArchetypeCardProps {
    archetype: Archetype;
    index: number;
}

export function ArchetypeCard({ archetype, index }: ArchetypeCardProps) {
    return (
        <Link to={`/archetype/${archetype.id}`}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={cn(
                    "relative overflow-hidden rounded-xl border border-white/40 bg-white/60 p-6 shadow-lg backdrop-blur-md transition-all",
                    "hover:shadow-xl hover:border-indigo-300/50 group"
                )}
            >
                {/* Subtle Gradient Background */}
                <div className={cn(
                    "absolute inset-0 opacity-5 transition-opacity group-hover:opacity-10 bg-gradient-to-br",
                    archetype.color
                )} />

                <div className="relative z-10">
                    <div className="mb-4 flex items-center justify-between">
                        <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                            {archetype.category}
                        </span>
                        <Sparkles className="h-4 w-4 text-slate-400 opacity-0 transition-opacity group-hover:opacity-100 text-yellow-500" />
                    </div>

                    <h3 className="mb-1 font-serif text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                        {archetype.name}
                    </h3>
                    <p className="mb-4 text-sm font-medium text-slate-500 font-serif italic">
                        {archetype.subtitle}
                    </p>

                    <p className="mb-6 line-clamp-2 text-sm text-slate-600 leading-relaxed">
                        {archetype.algorithm}
                    </p>

                    <div className="flex items-center text-sm font-semibold text-primary">
                        Begin Protocol
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}
