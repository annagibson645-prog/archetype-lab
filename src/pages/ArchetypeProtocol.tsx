import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { archetypes } from '../data/archetypes';
import { WizardContainer } from '../components/ProtocolWizard/WizardContainer';
import { useJourney } from '../hooks/useJourney';

export function ArchetypeProtocol() {
    const { id } = useParams<{ id: string }>();
    const archetype = archetypes.find(a => a.id === id);
    const { startJourney } = useJourney();
    const [journeyId, setJourneyId] = useState<string | null>(null);

    useEffect(() => {
        if (archetype) {
            const jId = startJourney(archetype.id);
            setJourneyId(jId);
        }
    }, [archetype, startJourney]);

    if (!archetype) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold mb-4">Archetype Not Found</h1>
                <Link to="/archetypes" className="text-primary hover:underline">
                    Return to Library
                </Link>
            </div>
        );
    }

    if (!journeyId) return null; // Loading state

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Immersive Header */}
            <div className={`w-full py-12 px-4 bg-gradient-to-br ${archetype.color} text-white shadow-lg`}>
                <div className="max-w-4xl mx-auto">
                    <Link to="/archetypes" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Library
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">{archetype.name}</h1>
                    <p className="text-xl text-white/90 font-light italic">{archetype.subtitle}</p>
                </div>
            </div>

            {/* Main Wizard Area */}
            <div className="max-w-4xl mx-auto -mt-8 relative z-10 px-4 pb-20">
                <WizardContainer archetype={archetype} journeyId={journeyId} />
            </div>
        </div>
    );
}
