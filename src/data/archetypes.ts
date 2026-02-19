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
    },
    // --- NEW ADDITIONS ---
    {
        id: "elon-musk",
        name: "Elon Musk",
        subtitle: "The First Principles Engineer",
        category: "Innovation",
        algorithm: "Boil things down to the most fundamental truths and reason up from there.",
        useFor: "Problem solving, cost reduction, radical innovation",
        keyPattern: "The only rules are the laws of physics. Everything else is a recommendation.",
        color: "from-fuchsia-600 to-purple-800",
        prompts: {
            excavation: {
                question: "Where are you reasoning by analogy ('doing what others do')?",
                helper: "What is the actual physical limit of what is possible here?",
            },
            installation: {
                framework: "If a requirement exists → Then question who set it and if it's a law of physics.",
                microTests: [
                    "Identify one 'industry standard' you are following blindly.",
                    "Calculate the raw material cost of your product/service.",
                    "Delete a process step that isn't absolutely vital."
                ]
            },
            validation: {
                check1: "Did I delete a requirement today?",
                check2: "Did I successfully reason from ground truths?"
            }
        }
    },
    {
        id: "alen-sultanic",
        name: "Alen Sultanic",
        subtitle: "The Nothing-Held-Back Marketer",
        category: "Strategic Thinking",
        algorithm: "Scale aggressively; the market rewards volume and speed.",
        useFor: "Marketing, scaling offers, breaking through noise",
        keyPattern: "Money loves speed. Imperfect action beats perfect inaction every time.",
        color: "from-emerald-600 to-green-900",
        prompts: {
            excavation: {
                question: "Where are you hesitating to push the button on scaling?",
                helper: "Are you waiting for 'perfect' when 'good enough' would sell?",
            },
            installation: {
                framework: "If you have a winner → Then scale it until it breaks.",
                microTests: [
                    "Double your outreach/ad spend for 24 hours.",
                    "Launch an offer before the product is 100% finished.",
                    "Send an email to your list right now."
                ]
            },
            validation: {
                check1: "Did I move faster than I felt comfortable with?",
                check2: "Did I let the market decide instead of my opinion?"
            }
        }
    },
    {
        id: "steve-jobs",
        name: "Steve Jobs",
        subtitle: "The Product Visionary",
        category: "Creativity",
        algorithm: "People don't know what they want until you show it to them.",
        useFor: "Product design, user experience, branding",
        keyPattern: "Simplicity is the ultimate sophistication.",
        color: "from-neutral-800 to-black",
        prompts: {
            excavation: {
                question: "What ugly or complex part of your work are you tolerating?",
                helper: "Where are you compromising on quality for convenience?",
            },
            installation: {
                framework: "If designing something → Then remove elements until nothing else can be removed.",
                microTests: [
                    "Simplify one interface or process step.",
                    "Say 'no' to a feature request that dilutes the vision.",
                    "Obsess over one tiny detail nobody else notices."
                ]
            },
            validation: {
                check1: "Did I make something simpler today?",
                check2: "Did I refuse to compromise on excellence?"
            }
        }
    },
    {
        id: "machiavelli",
        name: "Niccolò Machiavelli",
        subtitle: "The Realist",
        category: "Strategic Thinking",
        algorithm: "It is better to be feared than loved, if you cannot be both.",
        useFor: "Political maneuvering, corporate dynamics, survival",
        keyPattern: "Judge by results, not intentions.",
        color: "from-red-900 to-slate-900",
        prompts: {
            excavation: {
                question: "Where are you being naive about human nature?",
                helper: "Are you hoping people will be 'nice' instead of acting in self-interest?",
            },
            installation: {
                framework: "If dealing with an opponent → Then assume self-interest and leverage it.",
                microTests: [
                    "Identify the hidden incentive of your rival.",
                    "Do a favor that creates a debt to be collected later.",
                    "Conceal your true intentions in a negotiation."
                ]
            },
            validation: {
                check1: "Did I see the world as it is, not as it should be?",
                check2: "Did I protect my position effectively?"
            }
        }
    },
    {
        id: "napoleon",
        name: "Napoleon Bonaparte",
        subtitle: "The Master of Speed",
        category: "Leadership",
        algorithm: "Space we can recover, time never.",
        useFor: "Execution, seizing opportunity, momentum",
        keyPattern: "Audacity, audacity, always audacity.",
        color: "from-blue-700 to-yellow-600",
        prompts: {
            excavation: {
                question: "Where are you moving too slowly?",
                helper: "What decision are you delaying that is costing you momentum?",
            },
            installation: {
                framework: "If an opening appears → Then strike immediately with full force.",
                microTests: [
                    "Make a decision you've been putting off in the next 5 minutes.",
                    "Show up somewhere unexpected.",
                    "Turn a defensive situation into an attack."
                ]
            },
            validation: {
                check1: "Did I act with speed today?",
                check2: "Did I surprise my competition (or myself)?"
            }
        }
    },
    {
        id: "seneca",
        name: "Seneca",
        subtitle: "The Stoic Power-Broker",
        category: "Resilience",
        algorithm: "We suffer more in imagination than in reality.",
        useFor: "Anxiety, public speaking, high-stakes pressure",
        keyPattern: "Time is our most precious resource. Don't waste it.",
        color: "from-orange-700 to-stone-800",
        prompts: {
            excavation: {
                question: "What 'worst-case scenario' are you replaying in your head?",
                helper: "How much time have you wasted worrying about things that haven't happened?",
            },
            installation: {
                framework: "If anxiety rises → Then define the absolute worst case and accept it.",
                microTests: [
                    "Premedatatio Malorum: Visualize everything going wrong, then get to work.",
                    "Say 'no' to a social obligation that drains you.",
                    "Review your day: Where did you lose time?"
                ]
            },
            validation: {
                check1: "Did I stop a spiral of worry?",
                check2: "Did I treat my time as a commodity?"
            }
        }
    },
    {
        id: "einstein",
        name: "Albert Einstein",
        subtitle: "The Intuitive Genius",
        category: "Creativity",
        algorithm: "Imagination is more important than knowledge.",
        useFor: "Complex problems, theoretical work, breaking paradigms",
        keyPattern: "Look deep into nature, and then you will understand everything better.",
        color: "from-violet-600 to-indigo-900",
        prompts: {
            excavation: {
                question: "Where are you trying to brute-force a solution with logic?",
                helper: "Can you visualize the problem instead of calculating it?",
            },
            installation: {
                framework: "If stuck → Then engage in a 'Gedankenexperiment' (thought experiment).",
                microTests: [
                    "Daydream about your problem for 15 minutes without trying to solve it.",
                    "Ask 'What if the rules were reversed?'",
                    "Explain your problem to a 6-year-old."
                ]
            },
            validation: {
                check1: "Did I maintain a sense of wonder?",
                check2: "Did I use intuition alongside logic?"
            }
        }
    },
    {
        id: "miyamoto-musashi",
        name: "Miyamoto Musashi",
        subtitle: "The Sword Saint",
        category: "Wisdom",
        algorithm: "Do nothing which is of no use.",
        useFor: "Mastery, discipline, focus",
        keyPattern: "From one thing, know ten thousand things.",
        color: "from-zinc-700 to-black",
        prompts: {
            excavation: {
                question: "What activity are you doing that has no purpose?",
                helper: "Where is your focus scattered?",
            },
            installation: {
                framework: "If training/working → Then be fully present; cut the extraneous.",
                microTests: [
                    "Do one task with zero distractions for 60 minutes.",
                    "Identify the 'Way' in your daily craft.",
                    "Walk with perfect posture and awareness."
                ]
            },
            validation: {
                check1: "Did I eliminate a useless habit?",
                check2: "Was I fully engaged in my actions?"
            }
        }
    },
    {
        id: "david-goggins",
        name: "David Goggins",
        subtitle: "The Toughest Man Alive",
        category: "Resilience",
        algorithm: "Callous your mind. When you think you're done, you're only at 40%.",
        useFor: "Endurance, breaking limits, overcoming laziness",
        keyPattern: "Stay hard.",
        color: "from-green-800 to-black",
        prompts: {
            excavation: {
                question: "Where are you negotiating with yourself to quit?",
                helper: "What excuses are you making right now?",
            },
            installation: {
                framework: "If pain/comfort-seeking arises → Then do one more rep/hour.",
                microTests: [
                    "Go for a run in the rain/cold.",
                    "Stare at a wall for 30 minutes (do something boring).",
                    "Wake up earlier than you want to."
                ]
            },
            validation: {
                check1: "Did I win the war against my mind?",
                check2: "Did I fail to quit?"
            }
        }
    },
    {
        id: "cleopatra",
        name: "Cleopatra",
        subtitle: "The Diplomat Queen",
        category: "Leadership",
        algorithm: "Charm is a weapon; speak every language.",
        useFor: "Negotiation, persuasion, alliance building",
        keyPattern: "I will not be triumphed over.",
        color: "from-yellow-500 to-amber-700",
        prompts: {
            excavation: {
                question: "Who are you failing to understand or charm?",
                helper: "Are you relying on authority when you should use influence?",
            },
            installation: {
                framework: "If entering a room → Then make everyone feel they are the most important person there.",
                microTests: [
                    "Learn one phrase in a new language/jargon.",
                    "Give a genuine, specific compliment to a rival.",
                    "Orchestrate a meeting where you say little but guide everything."
                ]
            },
            validation: {
                check1: "Did I win an ally?",
                check2: "Did I maintain my dignity?"
            }
        }
    }
];
