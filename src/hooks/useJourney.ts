import { useLocalStorage } from './useLocalStorage';
import type { JourneyEntry } from '../types';
import { v4 as uuidv4 } from 'uuid';

// Simple ID generator if uuid is not installed, though we should probably install it.
// For now, using simple random string to avoid extra dependency if not strictly needed yet.
// const generateId = () => Math.random().toString(36).substring(2, 15);

export function useJourney() {
    const [journeys, setJourneys] = useLocalStorage<JourneyEntry[]>('archetype-lab-journeys', []);

    const getJourney = (id: string) => journeys.find(j => j.id === id);

    const getActiveJourney = (archetypeId: string) =>
        journeys.find(j => j.archetypeId === archetypeId && j.status === 'active');

    const startJourney = (archetypeId: string): string => {
        // Check if active journey exists, if so return it
        const existing = getActiveJourney(archetypeId);
        if (existing) return existing.id;

        const newJourney: JourneyEntry = {
            id: uuidv4(),
            archetypeId,
            startDate: new Date().toISOString(),
            lastUpdated: new Date().toISOString(),
            excavation: null,
            installation: null,
            validation: null,
            status: 'active'
        };

        setJourneys(prev => [...prev, newJourney]);
        return newJourney.id;
    };

    const updateExcavation = (id: string, data: { situation: string; identifiedBelief: string }) => {
        setJourneys(prev => prev.map(j => {
            if (j.id !== id) return j;
            return {
                ...j,
                lastUpdated: new Date().toISOString(),
                excavation: { ...data, timestamp: new Date().toISOString() }
            };
        }));
    };

    const updateInstallation = (id: string, data: { commitmentLevel: number; customAdaptation: string }) => {
        setJourneys(prev => prev.map(j => {
            if (j.id !== id) return j;
            return {
                ...j,
                lastUpdated: new Date().toISOString(),
                installation: { ...data, timestamp: new Date().toISOString() }
            };
        }));
    };

    const completeJourney = (id: string, reflections: string) => {
        setJourneys(prev => prev.map(j => {
            if (j.id !== id) return j;
            return {
                ...j,
                lastUpdated: new Date().toISOString(),
                status: 'completed',
                validation: {
                    reflections,
                    completed: true,
                    timestamp: new Date().toISOString()
                }
            };
        }));
    };

    return {
        journeys,
        getJourney,
        getActiveJourney,
        startJourney,
        updateExcavation,
        updateInstallation,
        completeJourney
    };
}
