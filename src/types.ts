export interface Archetype {
    id: string;
    name: string;
    subtitle: string;
    category: string;
    algorithm: string;
    useFor: string;
    keyPattern: string;
    color: string;
    prompts: {
        excavation: {
            question: string;
            helper: string;
        };
        installation: {
            framework: string;
            microTests: string[];
        };
        validation: {
            check1: string;
            check2: string;
        };
    };
}

export type JourneyStatus = 'active' | 'completed' | 'abandoned';

export interface JourneyEntry {
    id: string; // UUID
    archetypeId: string;
    startDate: string; // ISO Date
    lastUpdated: string; // ISO Date

    // Phase 1: Excavation
    excavation: {
        situation: string;      // User input: "I felt..."
        identifiedBelief: string; // User input: "I believe..."
        timestamp?: string;
    } | null;

    // Phase 2: Installation
    installation: {
        commitmentLevel: number; // 1-5
        customAdaptation: string; // User input: How they tailored the algorithm
        timestamp?: string;
    } | null;

    // Phase 3: Validation
    validation: {
        reflections: string;
        completed: boolean;
        timestamp?: string;
    } | null;

    status: JourneyStatus;
}

export interface UserData {
    journeys: JourneyEntry[];
    preferences: {
        theme: 'light' | 'dark';
        lastVisitedPath: string;
    };
}
