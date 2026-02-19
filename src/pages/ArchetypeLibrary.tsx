import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import { archetypes } from '../data/archetypes';
import { ArchetypeCard } from '../components/ArchetypeCard';
import { cn } from '../lib/utils';

const CATEGORIES = ["All", ...new Set(archetypes.map(a => a.category))];

export function ArchetypeLibrary() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredArchetypes = archetypes.filter(a => {
        const matchesCategory = selectedCategory === "All" || a.category === selectedCategory;
        const matchesSearch = a.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            a.algorithm.toLowerCase().includes(searchQuery.toLowerCase()) ||
            a.useFor.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 mb-4"
                >
                    Select Your Architecture
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-lg text-slate-600 max-w-2xl mx-auto"
                >
                    Choose a consciousness algorithm to install. Filter by domain or search for a specific problem you're solving.
                </motion.p>
            </div>

            {/* Controls */}
            <div className="mb-12 space-y-6">
                {/* Search */}
                <div className="relative max-w-md mx-auto">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search specifically (e.g., 'resilience', 'strategy')..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white/50 backdrop-blur-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all shadow-sm"
                    />
                </div>

                {/* Categories */}
                <div className="flex flex-wrap justify-center gap-2">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={cn(
                                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                                selectedCategory === cat
                                    ? "bg-primary text-white shadow-md shadow-primary/20"
                                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid */}
            <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                <AnimatePresence>
                    {filteredArchetypes.map((archetype, index) => (
                        <motion.div
                            layout
                            key={archetype.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                        >
                            <ArchetypeCard archetype={archetype} index={index} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {filteredArchetypes.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-slate-500 text-lg">No matching archetypes found.</p>
                    <button
                        onClick={() => { setSelectedCategory("All"); setSearchQuery("") }}
                        className="mt-4 text-primary font-medium hover:underline"
                    >
                        Clear filters
                    </button>
                </div>
            )}
        </div>
    );
}
