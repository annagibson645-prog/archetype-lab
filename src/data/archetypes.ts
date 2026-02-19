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

export const archetypes: Archetype[] = [
    {
        id: "sun-tzu",
        name: "Sun Tzu",
        subtitle: "The Strategic General",
        category: "Strategic Thinking",
        algorithm: "Know when to engage, when to retreat; win before fighting",
        useFor: "Business strategy, competitive positioning, knowing when to act",
        keyPattern: "Victory goes to those who know when to fight and when not to fight",
        color: "from-red-600 to-red-800",
        prompts: {
            excavation: {
                question: "Describe a recent conflict or competition where you felt impulsive or reactive.",
                helper: "Did you fight before you knew you could win?",
            },
            installation: {
                framework: "If facing competitive threat → Then assess terrain before engaging.",
                microTests: [
                    "Next time a competitor launches, wait 48 hours to analyze.",
                    "Map their '5 factors' (mission, timing, terrain, leadership, doctrine).",
                    "Identify one battle you can win without fighting."
                ]
            },
            validation: {
                check1: "Did I avoid a fight that I would have lost?",
                check2: "Did I use information instead of force?"
            }
        }
    },
    {
        id: "marcus-aurelius",
        name: "Marcus Aurelius",
        subtitle: "The Philosopher King",
        category: "Resilience",
        algorithm: "The obstacle is the way; turn adversity into fuel",
        useFor: "Handling setbacks, emotional regulation, leadership under pressure",
        keyPattern: "The impediment to action advances action. What stands in the way becomes the way.",
        color: "from-slate-600 to-slate-800",
        prompts: {
            excavation: {
                question: "What is the biggest obstacle currently blocking your path?",
                helper: "How are you resisting this reality instead of using it?",
            },
            installation: {
                framework: "If obstacle appears → Then find the specific virtue this obstacle demands.",
                microTests: [
                    "Reframe one annoyance today as 'training'.",
                    "Write down what this specific problem allows you to practice.",
                    "Remove one judgment about a 'bad' event."
                ]
            },
            validation: {
                check1: "Did I complain less today?",
                check2: "Did I see the opportunity in the difficulty?"
            }
        }
    },
    {
        id: "leonardo-da-vinci",
        name: "Leonardo da Vinci",
        subtitle: "The Universal Polymath",
        category: "Creativity",
        algorithm: "Relentless curiosity; everything connects to everything else",
        useFor: "Innovation, deep learning, seeing systems",
        keyPattern: "Study the science of art. Study the art of science. Develop your senses.",
        color: "from-amber-600 to-amber-800",
        prompts: {
            excavation: {
                question: "Where have you become rigid or specialized in your thinking?",
                helper: "What are you ignoring because it's 'not your field'?",
            },
            installation: {
                framework: "If stuck on a problem → Then look for an analogy in nature or a different field.",
                microTests: [
                    "Draw the structure of your problem.",
                    "Observe one natural phenomenon for 10 minutes.",
                    "Connect two unrelated ideas in your notebook."
                ]
            },
            validation: {
                check1: "Did I ask 'why' like a child?",
                check2: "Did I use a visual metaphor to understand a concept?"
            }
        }
    },
    {
        id: "shackleton",
        name: "Ernest Shackleton",
        subtitle: "The Endurance Leader",
        category: "Leadership",
        algorithm: "Optimism is true moral courage; bring everyone home",
        useFor: "Crisis management, team morale, impossible situations",
        keyPattern: "Difficulties are just things to overcome, after all.",
        color: "from-cyan-700 to-blue-900",
        prompts: {
            excavation: {
                question: "Where is morale failing in your team (or yourself)?",
                helper: "Are you projecting despair or calm confidence?",
            },
            installation: {
                framework: "If crisis hits → Then project absolute calm while improvising a solution.",
                microTests: [
                    "Find one thing to celebrate in a bad situation.",
                    "Check on the 'weakest link' in your team with genuine care.",
                    "Reframe a failure as a pivot point."
                ]
            },
            validation: {
                check1: "Did I keep the team united?",
                check2: "Did I maintain hope without denying reality?"
            }
        }
    },
    {
        id: "socrates",
        name: "Socrates",
        subtitle: "The Gadfly",
        category: "Wisdom",
        algorithm: "The unexamined life is not worth living; question everything",
        useFor: "Critical thinking, debugging beliefs, finding truth",
        keyPattern: "I know that I know nothing.",
        color: "from-stone-500 to-stone-700",
        prompts: {
            excavation: {
                question: "What opinion do you hold most strongly right now?",
                helper: "Why might the opposite also be true?",
            },
            installation: {
                framework: "If certainty arises → Then ask 'What evidence do I actually have?'",
                microTests: [
                    "Ask 'Why?' five times to get to the root.",
                    "Defend the opposing view of your strongest belief.",
                    "Admit 'I don't know' in a conversation."
                ]
            },
            validation: {
                check1: "Did I learn something new by listening?",
                check2: "Did I expose a contradiction in my thinking?"
            }
        }
    }
];
