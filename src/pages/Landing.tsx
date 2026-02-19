import { motion } from 'framer-motion';
import { ArrowRight, Brain, Zap, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Landing() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-300/30 rounded-full blur-[100px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-300/30 rounded-full blur-[100px]" />

            <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold tracking-wide uppercase border border-indigo-100">
                        Archetype Lab v1.0
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif font-extrabold text-slate-900 mb-6 leading-tight">
                        Install Consciousness <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            Algorithms
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Systematically adopt thinking patterns from history's greatest minds.
                        Excavate limitations. Install genius. Validate results.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/archetypes" className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-primary px-8 font-medium text-white transition-all duration-300 hover:bg-indigo-700 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30">
                            <span className="mr-2">Start Protocol</span>
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <button onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-3 rounded-md text-slate-600 font-medium hover:text-slate-900 transition-colors">
                            How it works
                        </button>
                    </div>
                </motion.div>

                {/* Feature Grid */}
                <div id="how-it-works" className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
                    <Feature
                        icon={<Brain className="h-6 w-6 text-yellow-600" />}
                        title="Excavate"
                        desc="Identify the hidden scripts running your life right now."
                        delay={0.2}
                        color="bg-yellow-50 border-yellow-100"
                    />
                    <Feature
                        icon={<Zap className="h-6 w-6 text-blue-600" />}
                        title="Install"
                        desc="Replace bugs with algorithms from Sun Tzu, Da Vinci, and more."
                        delay={0.4}
                        color="bg-blue-50 border-blue-100"
                    />
                    <Feature
                        icon={<Layers className="h-6 w-6 text-green-600" />}
                        title="Validate"
                        desc="Test in the real world. Ensure you own the tool, not vice versa."
                        delay={0.6}
                        color="bg-green-50 border-green-100"
                    />
                </div>
            </div>
        </div>
    );
}

function Feature({ icon, title, desc, delay, color }: { icon: any, title: string, desc: string, delay: number, color: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className={`p-6 rounded-2xl border ${color} backdrop-blur-sm`}
        >
            <div className="mb-4 h-12 w-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
            <p className="text-slate-600">{desc}</p>
        </motion.div>
    )
}
