import type { Archetype } from '../types';

export const batch3: Archetype[] = [
    {
        id: "isaac-newton",
        name: "Isaac Newton",
        subtitle: "The Architect of Reality",
        category: "Focus",
        algorithm: "To arrive at truth, keep the problem constantly before the mind.",
        useFor: "Deep concentration, mathematical thinking, solitude",
        keyPattern: "I do not know what I may appear to the world, but to myself I seem to have been only like a boy playing on the seashore.",
        color: "from-blue-900 to-black",
        prompts: {
            excavation: {
                question: "Where is your attention fracturing?",
                helper: "Can you hold one thought for 60 minutes?",
            },
            installation: {
                framework: "If a problem is hard → Then think of nothing else for days.",
                microTests: [
                    "Isolate yourself for 4 hours.",
                    "Define the 'laws' of your current challenge.",
                    "Refuse to switch tasks."
                ]
            },
            validation: {
                check1: "Did I hold the focus?",
                check2: "Did I find the underlying law?"
            }
        }
    },
    {
        id: "charles-darwin",
        name: "Charles Darwin",
        subtitle: "The Observer",
        category: "Wisdom",
        algorithm: "Collect massive data. Notice the tiny variations. Time rewards the adaptable.",
        useFor: "Patience, observation, rigorous data collection",
        keyPattern: "It is not the strongest of the species that survives, nor the most intelligent, but the one most responsive to change.",
        color: "from-green-700 to-emerald-800",
        prompts: {
            excavation: {
                question: "Where are you ignoring the data because it doesn't fit your theory?",
                helper: "Are you forcing a conclusion?",
            },
            installation: {
                framework: "If observing → Then write down exactly what you see, not what you expect.",
                microTests: [
                    "Record 5 observations about your field today.",
                    "Change your mind based on new evidence.",
                    "Look for the 'outlier' data point."
                ]
            },
            validation: {
                check1: "Did I see clearly?",
                check2: "Did I adapt my theory?"
            }
        }
    },
    {
        id: "galileo-galilei",
        name: "Galileo Galilei",
        subtitle: "The Star Gazer",
        category: "Innovation",
        algorithm: "Trust your eyes over authority. Eppur si muove (And yet it moves).",
        useFor: "Defiance, scientific method, paradigm shifts",
        keyPattern: "All truths are easy to understand once they are discovered; the point is to discover them.",
        color: "from-indigo-700 to-purple-900",
        prompts: {
            excavation: {
                question: "Where are you trusting an 'expert' over your own direct experience?",
                helper: "Have you looked through the telescope yourself?",
            },
            installation: {
                framework: "If authority says X and you see Y → Then believe Y.",
                microTests: [
                    "Conduct a small experiment to test a common belief.",
                    "Say 'I disagree' to a superior.",
                    "Build a tool to see what others can't."
                ]
            },
            validation: {
                check1: "Did I verify for myself?",
                check2: "Did I stand by the evidence?"
            }
        }
    },
    {
        id: "marie-curie",
        name: "Marie Curie",
        subtitle: "The Radium Queen",
        category: "Dedication",
        algorithm: "Nothing in life is to be feared, it is only to be understood.",
        useFor: "Fearlessness, sacrifice, obsession",
        keyPattern: "Be less curious about people and more curious about ideas.",
        color: "from-teal-600 to-cyan-900",
        prompts: {
            excavation: {
                question: "What are you afraid of investigating?",
                helper: "Is fear blocking your understanding?",
            },
            installation: {
                framework: "If afraid → Then study the source of the fear until it vanishes.",
                microTests: [
                    "Read a technical paper on something you fear (e.g., AI, disease).",
                    "Spend time in the 'lab' (your workspace) past midnight.",
                    "Ignore good advice to stop working."
                ]
            },
            validation: {
                check1: "Did I replace fear with knowledge?",
                check2: "Did I persist?"
            }
        }
    },
    {
        id: "aristotle",
        name: "Aristotle",
        subtitle: "The Categorizer",
        category: "Wisdom",
        algorithm: "Excellence is not an act, but a habit. Categorize to understand.",
        useFor: "Logic, systems, biology, ethics",
        keyPattern: "We are what we repeatedly do.",
        color: "from-blue-600 to-slate-600",
        prompts: {
            excavation: {
                question: "Where is your life messy and undefined?",
                helper: "Are you lacking definitions?",
            },
            installation: {
                framework: "If confused → Then define your terms and categories.",
                microTests: [
                    "Define exactly what 'success' means for this project.",
                    "Break a complex system into its parts.",
                    "Do the right thing by habit, not choice."
                ]
            },
            validation: {
                check1: "Did I define my terms?",
                check2: "Did I act with virtue?"
            }
        }
    },
    {
        id: "plato",
        name: "Plato",
        subtitle: "The Idealist",
        category: "Wisdom",
        algorithm: "Look for the Ideal Form behind the shadow.",
        useFor: "Vision, philosophy, education",
        keyPattern: "Reality is the shadow of ideas.",
        color: "from-sky-500 to-blue-700",
        prompts: {
            excavation: {
                question: "Where are you settling for a shadow of the truth?",
                helper: "What is the perfect version of this value?",
            },
            installation: {
                framework: "If seeing a flaw → Then imagine the perfect Ideal it fails to reach.",
                microTests: [
                    "Describe the Utopia of your project.",
                    "Ask 'What is Justice/Goodness in this situation?'",
                    "Lead someone out of the 'cave'."
                ]
            },
            validation: {
                check1: "Did I see the Ideal?",
                check2: "Did I aim higher?"
            }
        }
    },
    {
        id: "confucius",
        name: "Confucius",
        subtitle: "The Teacher of Order",
        category: "Wisdom",
        algorithm: "Respect ritual. Order in the family leads to order in the state.",
        useFor: "Social harmony, respect, tradition",
        keyPattern: "The superior man is modest in his speech, but exceeds in his actions.",
        color: "from-red-800 to-stone-900",
        prompts: {
            excavation: {
                question: "Where are you disrespecting the structure or elders?",
                helper: "Are you being arrogant?",
            },
            installation: {
                framework: "If interacting → Then perform the proper ritual/etiquette.",
                microTests: [
                    "Write a thank-you note by hand.",
                    "Show deference to someone with more experience.",
                    "Correct your own posture and conduct."
                ]
            },
            validation: {
                check1: "Did I show respect?",
                check2: "Did I maintain harmony?"
            }
        }
    },
    {
        id: "lao-tzu",
        name: "Lao Tzu",
        subtitle: "The Old Master",
        category: "Wisdom",
        algorithm: "Wu Wei: Action through non-action. Flow like water.",
        useFor: "Ease, letting go, leadership without force",
        keyPattern: "Nature does not hurry, yet everything is accomplished.",
        color: "from-teal-700 to-green-900",
        prompts: {
            excavation: {
                question: "Where are you forcing things?",
                helper: "Are you swimming upstream?",
            },
            installation: {
                framework: "If resistance appears → Then stop pushing and wait/redirect.",
                microTests: [
                    "Do less to achieve more.",
                    "Sit in silence for 15 minutes.",
                    "Let someone else take the credit."
                ]
            },
            validation: {
                check1: "Did I stop forcing?",
                check2: "Did I flow?"
            }
        }
    },
    {
        id: "buddha",
        name: "The Buddha",
        subtitle: "The Awakened One",
        category: "Wisdom",
        algorithm: "Reduce suffering by reducing attachment.",
        useFor: "Peace, clarity, ending desire",
        keyPattern: "The root of suffering is attachment.",
        color: "from-amber-400 to-orange-500",
        prompts: {
            excavation: {
                question: "What are you clinging to that causes you pain?",
                helper: "Is it an outcome? A person? A status?",
            },
            installation: {
                framework: "If desire arises → Then observe it without acting on it.",
                microTests: [
                    "Meditate on the impermanence of your current problem.",
                    "Give away something you want to keep.",
                    "Watch an emotion pass like a cloud."
                ]
            },
            validation: {
                check1: "Did I let go?",
                check2: "Did I find peace?"
            }
        }
    },
    {
        id: "rumi",
        name: "Rumi",
        subtitle: "The Mystic Poet",
        category: "Creativity",
        algorithm: "Let the beauty of what you love be what you do.",
        useFor: "Love, artistic flow, dissolving the ego",
        keyPattern: "The wound is the place where the Light enters you.",
        color: "from-rose-700 to-red-900",
        prompts: {
            excavation: {
                question: "Where are you judging yourself?",
                helper: "Can you turn that judgment into love?",
            },
            installation: {
                framework: "If in pain → Then dance/spin/create with it.",
                microTests: [
                    "Write a poem about your problem.",
                    "Love the thing that is breaking you.",
                    "Spin until you are dizzy (Sufi style)."
                ]
            },
            validation: {
                check1: "Did I find the light?",
                check2: "Did I create beauty?"
            }
        }
    },
    {
        id: "abraham-lincoln",
        name: "Abraham Lincoln",
        subtitle: "The Great Emancipator",
        category: "Leadership",
        algorithm: "Persistence through failure. Bind the wounds.",
        useFor: "Managing dividers, depression, long games",
        keyPattern: "I walk slowly, but I never walk backward.",
        color: "from-slate-800 to-black",
        prompts: {
            excavation: {
                question: "Where are you letting a setback define you?",
                helper: "Are you giving up too soon?",
            },
            installation: {
                framework: "If failed → Then tell a joke, learn the lesson, and continue.",
                microTests: [
                    "Write a letter to an enemy and burn it (The 'Hot Letter').",
                    "Find common ground with someone you hate.",
                    "Tell a story to defuse tension."
                ]
            },
            validation: {
                check1: "Did I keep walking?",
                check2: "Did I unify?"
            }
        }
    },
    {
        id: "nelson-mandela",
        name: "Nelson Mandela",
        subtitle: "The Reconciler",
        category: "Leadership",
        algorithm: "Forgiveness is a weapon. Lead from behind.",
        useFor: "Reconciliation, moral authority, patience",
        keyPattern: "It always seems impossible until it's done.",
        color: "from-green-600 to-yellow-600",
        prompts: {
            excavation: {
                question: "Who are you refusing to forgive?",
                helper: "Is this grudge hurting them or you?",
            },
            installation: {
                framework: "If hated → Then respond with unexpected grace.",
                microTests: [
                    "Forgive your worst enemy in your heart.",
                    "Smile when you want to scream.",
                    "Empower someone else to take the lead."
                ]
            },
            validation: {
                check1: "Did I release the poison?",
                check2: "Did I empower others?"
            }
        }
    },
    {
        id: "martin-luther-king",
        name: "Martin Luther King Jr.",
        subtitle: "The Dreamer of Justice",
        category: "Leadership",
        algorithm: "Moral force. Non-violent tension.",
        useFor: "Social change, public speaking, justice",
        keyPattern: "The arc of the moral universe is long, but it bends toward justice.",
        color: "from-red-800 to-black",
        prompts: {
            excavation: {
                question: "Where are you accepting injustice?",
                helper: "Are you silent about what matters?",
            },
            installation: {
                framework: "If treated unfairly → Then showcase the unfairness without returning violence.",
                microTests: [
                    "Speak up in an uncomfortable meeting.",
                    "Articulate your dream clearly.",
                    "Refuse to hate your oppressor."
                ]
            },
            validation: {
                check1: "Did I have a dream?",
                check2: "Did I create constructive tension?"
            }
        }
    },
    {
        id: "gandhi",
        name: "Mahatma Gandhi",
        subtitle: "The Great Soul",
        category: "Resilience",
        algorithm: "Satyagraha: Truth-force. Be the change.",
        useFor: "Willpower, simplicity, peaceful resistance",
        keyPattern: "Be the change that you wish to see in the world.",
        color: "from-orange-400 to-stone-600",
        prompts: {
            excavation: {
                question: "Where are you waiting for the world to change?",
                helper: "Why aren't you doing it?",
            },
            installation: {
                framework: "If you want X → Then embody X fully first.",
                microTests: [
                    "Fast (skip a meal) to test your will.",
                    "Spin your own thread (make something from scratch).",
                    "Refuse to cooperate with a bad rule."
                ]
            },
            validation: {
                check1: "Was I the change?",
                check2: "Did I resist peacefully?"
            }
        }
    },
    {
        id: "mother-teresa",
        name: "Mother Teresa",
        subtitle: "The Saint of the Gutters",
        category: "Focus",
        algorithm: "Do small things with great love.",
        useFor: "Service, humility, practical action",
        keyPattern: "If you can't feed a hundred people, then feed just one.",
        color: "from-blue-400 to-white",
        prompts: {
            excavation: {
                question: "Where are you overwhelmed by the size of the problem?",
                helper: "Can you help just one person?",
            },
            installation: {
                framework: "If overwhelmed → Then zoom in to the immediate individual next to you.",
                microTests: [
                    "Help one person secretly.",
                    "Smile at a stranger.",
                    "Clean a mess you didn't make."
                ]
            },
            validation: {
                check1: "Did I love?",
                check2: "Did I ignore the numbers?"
            }
        }
    },
    {
        id: "margaret-thatcher",
        name: "Margaret Thatcher",
        subtitle: "The Iron Lady",
        category: "Leadership",
        algorithm: "Conviction over consensus. The lady's not for turning.",
        useFor: "Making hard decisions, standing alone, principle",
        keyPattern: "You may have to fight a battle more than once to win it.",
        color: "from-blue-700 to-blue-900",
        prompts: {
            excavation: {
                question: "Where are you compromising to be liked?",
                helper: "Are you leading or following the poll numbers?",
            },
            installation: {
                framework: "If pressured to turn → Then dig in your heels if you are right.",
                microTests: [
                    "Make a decision and stick to it despite complaints.",
                    "Sleep 4 hours and keep working.",
                    "Prioritize the long-term over short-term popularity."
                ]
            },
            validation: {
                check1: "Did I verify my conviction?",
                check2: "Did I refuse to turn?"
            }
        }
    },
    {
        id: "fdr",
        name: "Franklin D. Roosevelt",
        subtitle: "The Pragmatist",
        category: "Leadership",
        algorithm: "Bold experimentation. Try something. If it fails, admit it and try another.",
        useFor: "Crisis management, optimism, action",
        keyPattern: "The only thing we have to fear is fear itself.",
        color: "from-yellow-700 to-stone-800",
        prompts: {
            excavation: {
                question: "Where are you paralyzed by analysis?",
                helper: "Why aren't you running an experiment?",
            },
            installation: {
                framework: "If stuck → Then launch a pilot program immediately.",
                microTests: [
                    "Try a new method for 1 day.",
                    "Communicate hope to your team.",
                    "Smile through the pain."
                ]
            },
            validation: {
                check1: "Did I experiment?",
                check2: "Did I banish fear?"
            }
        }
    },
    {
        id: "jfk",
        name: "John F. Kennedy",
        subtitle: "The Visionary President",
        category: "Leadership",
        algorithm: "Ask not what your country can do for you; set the moonshot.",
        useFor: "Inspiration, high goals, public service",
        keyPattern: "We choose to go to the moon not because it is easy, but because it is hard.",
        color: "from-blue-600 to-red-600",
        prompts: {
            excavation: {
                question: "Where are you picking the easy path?",
                helper: "What is your 'Moon shot'?",
            },
            installation: {
                framework: "If setting a goal → Then pick the one that forces you to grow.",
                microTests: [
                    "Set a deadline that seems impossible.",
                    "Challenge your team to greatness.",
                    "Take responsibility for a failure ('I am the responsible officer')."
                ]
            },
            validation: {
                check1: "Did I choose the hard thing?",
                check2: "Did I inspire?"
            }
        }
    },
    {
        id: "jeff-bezos",
        name: "Jeff Bezos",
        subtitle: "The Day 1 Thinker",
        category: "Strategic Thinking",
        algorithm: "Obsess over customers. Be stubborn on vision, flexible on details.",
        useFor: "Long-term building, customer focus, innovation",
        keyPattern: "It is always Day 1.",
        color: "from-orange-500 to-black",
        prompts: {
            excavation: {
                question: "Where are you focusing on competitors instead of customers?",
                helper: "Are you inventing or copying?",
            },
            installation: {
                framework: "If deciding → Then choose the option that is better for the customer in 3 years.",
                microTests: [
                    "Write a press release for a future product.",
                    "Ban PowerPoint; write a memo.",
                    "Make a decision with 70% of the data."
                ]
            },
            validation: {
                check1: "Was it Day 1?",
                check2: "Did I obsess over the customer?"
            }
        }
    },
    {
        id: "sam-altman",
        name: "Sam Altman",
        subtitle: "The Scaler",
        category: "Innovation",
        algorithm: "Belief in the future. Scale is the only thing that matters.",
        useFor: "Ambition, startups, exponential thinking",
        keyPattern: "You can achieve 100x more than you think if you pick the right problem.",
        color: "from-emerald-500 to-green-700",
        prompts: {
            excavation: {
                question: "Is your ambition too low?",
                helper: "What would happen if you were 10x more ambitious?",
            },
            installation: {
                framework: "If planning → Then add a zero to the target.",
                microTests: [
                    "Ask 'How can I achieve my 10-year plan in 6 months?'",
                    "Hire someone smarter than you.",
                    "Take a massive calculated risk."
                ]
            },
            validation: {
                check1: "Did I think exponentially?",
                check2: "Did I move fast?"
            }
        }
    },
    {
        id: "larry-ellison",
        name: "Larry Ellison",
        subtitle: "The Technocrat Samurai",
        category: "Strategic Thinking",
        algorithm: "Win. The rest is commentary.",
        useFor: "Aggression, sales, dominance",
        keyPattern: "I have had all of the disadvantages required for success.",
        color: "from-red-700 to-zinc-900",
        prompts: {
            excavation: {
                question: "Where are you making excuses about your background?",
                helper: "Use your disadvantages.",
            },
            installation: {
                framework: "If competing → Then aim to obliterate, not just win.",
                microTests: [
                    "Quote a price higher than you think you deserve.",
                    "Buy out a competitor (or their idea).",
                    "Study Japanese art/warfare for 1 hour."
                ]
            },
            validation: {
                check1: "Did I win?",
                check2: "Did I use my disadvantage?"
            }
        }
    },
    {
        id: "peter-thiel",
        name: "Peter Thiel",
        subtitle: "The Contrarian",
        category: "Strategic Thinking",
        algorithm: "Competition is for losers. Build a monopoly.",
        useFor: "Startup strategy, uniqueness, escaping competition",
        keyPattern: "What important truth do very few people agree with you on?",
        color: "from-blue-500 to-indigo-600",
        prompts: {
            excavation: {
                question: "Where are you copying everyone else?",
                helper: "Are you competing or creating?",
            },
            installation: {
                framework: "If doing X because 'everyone does X' → Then stop. Do Y.",
                microTests: [
                    "Identify your secret.",
                    "Narrow your niche until you are the only one.",
                    "Plan for 10 years out, not 1."
                ]
            },
            validation: {
                check1: "Did I escape competition?",
                check2: "Did I tell a secret truth?"
            }
        }
    },
    {
        id: "paul-graham",
        name: "Paul Graham",
        subtitle: "The Maker's Maker",
        category: "Wisdom",
        algorithm: "Do things that don't scale. Be relentlessly earnest.",
        useFor: "Early stage growth, writing, clear thinking",
        keyPattern: "Keep your identity small.",
        color: "from-orange-600 to-yellow-600",
        prompts: {
            excavation: {
                question: "Where are you acting 'corporate' instead of human?",
                helper: "Are you trying to be big before you are good?",
            },
            installation: {
                framework: "If starting → Then hand-craft the solution for one user.",
                microTests: [
                    "Email one user/customer personally.",
                    "Write an essay to clarify your thoughts.",
                    "Solve a problem you personally have."
                ]
            },
            validation: {
                check1: "Did it handle the unscalable?",
                check2: "Was I earnest?"
            }
        }
    },
    {
        id: "ray-dalio",
        name: "Ray Dalio",
        subtitle: "The Principle Architect",
        category: "Wisdom",
        algorithm: "Pain + Reflection = Progress. Radical Transparency.",
        useFor: "Systems, feedback, endless improvement",
        keyPattern: "Reality is a machine. Figure out how it works.",
        color: "from-slate-700 to-black",
        prompts: {
            excavation: {
                question: "Where are you hiding a mistake?",
                helper: "Are you avoiding the pain of reality?",
            },
            installation: {
                framework: "If pain occurs → Then write down the cause and the principle to prevent it next time.",
                microTests: [
                    "Ask for 'radical candor' feedback from a peer.",
                    "Write down your 'machine' layout.",
                    "Meditate to clear the noise."
                ]
            },
            validation: {
                check1: "Did I embrace the pain?",
                check2: "Did I build a principle?"
            }
        }
    },
    {
        id: "tim-ferriss",
        name: "Tim Ferriss",
        subtitle: "The Human Guinea Pig",
        category: "Focus",
        algorithm: "Deconstruct, Select, Sequence, Stakes. The 4-Hour mindset.",
        useFor: "Efficiency, learning skills fast, lifestyle design",
        keyPattern: "What would this look like if it were easy?",
        color: "from-orange-500 to-red-500",
        prompts: {
            excavation: {
                question: "Where are you making things hard to feel productive?",
                helper: "Are you efficient or just busy?",
            },
            installation: {
                framework: "If working hard → Then ask 'How can I remove 80% of this?'",
                microTests: [
                    "Batch your emails to twice a day.",
                    "Outsource a personal task.",
                    "Deconstruct a skill into its smallest parts."
                ]
            },
            validation: {
                check1: "Did I make it easy?",
                check2: "Did I use the 80/20 rule?"
            }
        }
    }
];

