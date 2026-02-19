import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Key, Check, Settings, AlertCircle } from 'lucide-react';
import { getStoredConfig, saveConfig, clearConfig } from '../lib/openrouter';

interface SettingsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
    const [apiKey, setApiKey] = useState('');
    const [model, setModel] = useState('openai/gpt-4o-mini');
    const [status, setStatus] = useState<'idle' | 'saved' | 'cleared'>('idle');

    useEffect(() => {
        if (isOpen) {
            const config = getStoredConfig();
            if (config) {
                setApiKey(config.apiKey);
                setModel(config.model);
            }
        }
    }, [isOpen]);

    const handleSave = () => {
        if (!apiKey.startsWith('sk-')) {
            // Basic validation check (loose, as OpenRouter keys vary, but usually start with sk- or similar)
            // For now, allow any non-empty string but warn if it looks weird? 
            // Actually OpenRouter keys start with 'sk-or-v1-...' usually. 
            // Let's just check length for now to avoid blocking different providers 
        }

        saveConfig(apiKey, model);
        setStatus('saved');
        setTimeout(() => {
            setStatus('idle');
            onClose();
        }, 1000);
    };

    const handleClear = () => {
        clearConfig();
        setApiKey('');
        setStatus('cleared');
        setTimeout(() => setStatus('idle'), 1500);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        {/* Modal */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
                        >
                            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                                <h2 className="text-xl font-serif font-bold text-slate-900 flex items-center gap-2">
                                    <Settings className="w-5 h-5 text-indigo-600" />
                                    Intelligence Settings
                                </h2>
                                <button
                                    onClick={onClose}
                                    className="p-1 hover:bg-slate-100 rounded-full transition-colors text-slate-500"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="p-6 space-y-6">
                                <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-sm text-blue-800 flex gap-3">
                                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                    <p>
                                        To enable real-time intelligence, you need an API key from
                                        <a
                                            href="https://openrouter.ai/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-bold underline decoration-blue-300 underline-offset-2 ml-1 hover:text-blue-900"
                                        >
                                            OpenRouter
                                        </a>.
                                        Your key is stored <strong>locally in your browser</strong> and never sent to our servers.
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                                        <Key className="w-4 h-4" />
                                        API Key
                                    </label>
                                    <input
                                        type="password"
                                        value={apiKey}
                                        onChange={(e) => setApiKey(e.target.value)}
                                        placeholder="sk-or-v1-..."
                                        className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all font-mono text-sm"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700">AI Model</label>
                                    <select
                                        value={model}
                                        onChange={(e) => setModel(e.target.value)}
                                        className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none bg-white"
                                    >
                                        <option value="openai/gpt-4o-mini">GPT-4o Mini (Fast & Cheap)</option>
                                        <option value="anthropic/claude-3-haiku">Claude 3 Haiku (Fast)</option>
                                        <option value="google/gemini-flash-1.5">Gemini Flash 1.5</option>
                                        <option value="meta-llama/llama-3-8b-instruct">Llama 3 8B (Open Source)</option>
                                    </select>
                                </div>
                            </div>

                            <div className="p-6 border-t border-slate-50 bg-slate-50 flex justify-between items-center">
                                <button
                                    onClick={handleClear}
                                    className="text-sm text-red-500 hover:text-red-700 font-medium px-3 py-2 hover:bg-red-50 rounded-lg transition-colors"
                                >
                                    Clear Data
                                </button>

                                <button
                                    onClick={handleSave}
                                    disabled={!apiKey}
                                    className={`
                                        flex items-center gap-2 px-6 py-2 rounded-lg font-semibold text-white shadow-lg transition-all
                                        ${status === 'saved' ? 'bg-green-600' : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-indigo-500/30'}
                                        ${!apiKey && 'opacity-50 cursor-not-allowed'}
                                    `}
                                >
                                    {status === 'saved' ? (
                                        <>
                                            <Check className="w-4 h-4" />
                                            Saved
                                        </>
                                    ) : (
                                        'Save Configuration'
                                    )}
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
