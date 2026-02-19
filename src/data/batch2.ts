import type { Archetype } from '../types';

export const batch2: Archetype[] = [
    {
        id: "carl-jung",
        name: "Carl Jung",
        subtitle: "The Shadow Worker",
        category: "Wisdom",
        algorithm: "Integrate the shadow; become whole, not just good.",
        useFor: "Self-awareness, understanding hidden motives, completeness",
        keyPattern: "Until you make the unconscious conscious, it will direct your life and you will call it fate.",
        color: "from-indigo-900 to-black",
        prompts: {
            excavation: {
                question: "What trait in others irritates you the most?",
                helper: "This is likely a projection of your own shadow.",
            },
            installation: {
                framework: "If a strong negative reaction arises → Then ask 'Where does this live in me?'",
                microTests: [
                    "Journal about your dark fantasies or socially unacceptable thoughts.",
                    "Admit a jealousy you feel.",
                    "Express an emotion you usually repress."
                ]
            },
            validation: {
                check1: "Did I own my projection?",
                check2: "Did I accept a 'bad' part of myself?"
            }
        }
    },
    {
        id: "friedrich-nietzsche",
        name: "Friedrich Nietzsche",
        subtitle: "The Dynamite Philosopher",
        category: "Resilience",
        algorithm: "Amor Fati: Love your fate. Say 'Yes' to life so loudly it echos.",
        useFor: "Overcoming nihilism, energy, embracing suffering",
        keyPattern: "That which does not kill us makes us stronger.",
        color: "from-red-900 to-black",
        prompts: {
            excavation: {
                question: "Where are you resenting your circumstances?",
                helper: "Are you wishing things were different?",
            },
            installation: {
                framework: "If disaster strikes → Then say 'This is what I needed' and mean it.",
                microTests: [
                    "Say 'Yes' to a painful experience.",
                    "Laugh in the face of a problem.",
                    "Affirm your life exactly as it is, with no edits."
                ]
            },
            validation: {
                check1: "Did I love my fate?",
                check2: "Did I turn suffering into strength?"
            }
        }
    },
    {
        id: "jordan-peterson",
        name: "Jordan Peterson",
        subtitle: "The Professor of Order",
        category: "Responsibility",
        algorithm: "Clean your room. Pick up the heaviest burden you can bear.",
        useFor: "Finding meaning, overcoming chaos, maturity",
        keyPattern: "Set your house in perfect order before you criticize the world.",
        color: "from-blue-800 to-slate-700",
        prompts: {
            excavation: {
                question: "What small, ugly thing are you ignoring in your immediate environment?",
                helper: "Is your room clean?",
            },
            installation: {
                framework: "If feeling chaotic → Then fix one small physical thing in front of you.",
                microTests: [
                    "Organize one drawer perfectly.",
                    "Tell the truth, or at least don't lie.",
                    "Take responsibility for something that isn't your fault."
                ]
            },
            validation: {
                check1: "Did I create order?",
                check2: "Did I bear a load?"
            }
        }
    },
    {
        id: "viktor-frankl",
        name: "Viktor Frankl",
        subtitle: "The Meaning Seeker",
        category: "Resilience",
        algorithm: "He who has a 'why' to live can bear almost any 'how'.",
        useFor: "Finding purpose in suffering, endurance",
        keyPattern: "The last of the human freedoms: to choose one's attitude in any given set of circumstances.",
        color: "from-slate-500 to-gray-700",
        prompts: {
            excavation: {
                question: "If you lost everything today, what would still matter?",
                helper: "What is your 'why'?",
            },
            installation: {
                framework: "If suffering occurs → Then ask 'What is life asking of me right now?'",
                microTests: [
                    "Dedicate a difficult task to someone you love.",
                    "Find meaning in a moment of boredom.",
                    "Choose your attitude when stuck in traffic."
                ]
            },
            validation: {
                check1: "Did I choose my response?",
                check2: "Did I serve a purpose outside myself?"
            }
        }
    },
    {
        id: "ayn-rand",
        name: "Ayn Rand",
        subtitle: "The Objectivist",
        category: "Focus",
        algorithm: "Rational self-interest. A is A. Existence exists.",
        useFor: "Clarity, guilt-free success, rejecting altruism",
        keyPattern: "The question isn't who is going to let me; it's who is going to stop me.",
        color: "from-amber-600 to-black",
        prompts: {
            excavation: {
                question: "Where are you sacrificing yourself for others out of guilt?",
                helper: "Are you being a martyr?",
            },
            installation: {
                framework: "If asked for a favor → Then check if it aligns with your values and self-interest.",
                microTests: [
                    "Say 'no' without explaining yourself.",
                    "Listing your own values hierarchy.",
                    "Produce something solely for your own pride."
                ]
            },
            validation: {
                check1: "Did I act in my own interest?",
                check2: "Did I refuse the unearned?"
            }
        }
    },
    {
        id: "walt-disney",
        name: "Walt Disney",
        subtitle: "The Dreamer",
        category: "Creativity",
        algorithm: "Dream, Believe, Dare, Do.",
        useFor: "Visionary thinking, experience design, magic",
        keyPattern: "It's kind of fun to do the impossible.",
        color: "from-blue-500 to-purple-500",
        prompts: {
            excavation: {
                question: "Where has your cynicism killed a dream?",
                helper: "Are you being too 'realistic'?",
            },
            installation: {
                framework: "If brainstorming → Then permit zero criticism until the dream is fully formed.",
                microTests: [
                    "Storyboard your ideal day.",
                    "Add a 'magical' touch to a boring deliverable.",
                    "Treat a customer/friend like a guest in your castle."
                ]
            },
            validation: {
                check1: "Did I suspend disbelief?",
                check2: "Did I create a moment of magic?"
            }
        }
    },
    {
        id: "henry-ford",
        name: "Henry Ford",
        subtitle: "The Industrialist",
        category: "Innovation",
        algorithm: "Standardization and simplification for the masses.",
        useFor: "Efficiency, scaling, systems thinking",
        keyPattern: "Failure is simply the opportunity to begin again, this time more intelligently.",
        color: "from-slate-700 to-zinc-900",
        prompts: {
            excavation: {
                question: "Where is your process custom and messy?",
                helper: "Why isn't this automated or standardized?",
            },
            installation: {
                framework: "If a task is repeated → Then build a machine (or checklist) to do it.",
                microTests: [
                    "Turn a task into a checklist.",
                    "Remove a part of a product to make it cheaper/better.",
                    "Solve a problem for the 'common man'."
                ]
            },
            validation: {
                check1: "Did I build a system?",
                check2: "Did I simplify the complex?"
            }
        }
    },
    {
        id: "coco-chanel",
        name: "Coco Chanel",
        subtitle: "The Icon of Style",
        category: "Creativity",
        algorithm: "Luxury must be comfortable, otherwise it is not luxury.",
        useFor: "Branding, elegance, breaking norms",
        keyPattern: "In order to be irreplaceable one must always be different.",
        color: "from-stone-800 to-black",
        prompts: {
            excavation: {
                question: "Where are you adding clutter to hide poor quality?",
                helper: "Is your work elegant or just loud?",
            },
            installation: {
                framework: "If styling/designing → Then remove the last thing you added.",
                microTests: [
                    "Wear something that makes you feel powerful.",
                    "Simplify a design by 50%.",
                    "Choose comfort and style over convention."
                ]
            },
            validation: {
                check1: "Did I remove the unnecessary?",
                check2: "Was I fearlessly myself?"
            }
        }
    },
    {
        id: "oprah-winfrey",
        name: "Oprah Winfrey",
        subtitle: "The Queen of Connection",
        category: "Leadership",
        algorithm: "Turn your wounds into wisdom; connect through empathy.",
        useFor: "Communication, emotional intelligence, influence",
        keyPattern: "The biggest adventure you can take is to live the life of your dreams.",
        color: "from-purple-700 to-fuchsia-900",
        prompts: {
            excavation: {
                question: "Where are you hiding your true story?",
                helper: "Are you afraid of being vulnerable?",
            },
            installation: {
                framework: "If speaking to someone → Then listen for their pain and validate it.",
                microTests: [
                    "Ask 'What is the truest thing you can say right now?'",
                    "Share a personal struggle to open a conversation.",
                    "Validate someone's feelings without fixing them."
                ]
            },
            validation: {
                check1: "Did I connect deeply?",
                check2: "Did I listen with my heart?"
            }
        }
    },
    {
        id: "ernest-hemingway",
        name: "Ernest Hemingway",
        subtitle: "The Stoic Writer",
        category: "Creativity",
        algorithm: "Write one true sentence. Omit the rest.",
        useFor: "Clarity, brevity, honesty",
        keyPattern: "Courage is grace under pressure.",
        color: "from-amber-800 to-orange-900",
        prompts: {
            excavation: {
                question: "Where are you using adjectives to cover up weak nouns?",
                helper: "Are you fluffing your work?",
            },
            installation: {
                framework: "If communicating → Then cut 50% of the words.",
                microTests: [
                    "Edit an email to half its length.",
                    "State a hard truth without softening it.",
                    "Do something brave and don't talk about it."
                ]
            },
            validation: {
                check1: "Did I tell the truth?",
                check2: "Did I omit the bullshit?"
            }
        }
    },
    {
        id: "george-orwell",
        name: "George Orwell",
        subtitle: "The Truth Teller",
        category: "Wisdom",
        algorithm: "In a time of deceit, telling the truth is a revolutionary act.",
        useFor: "Political clarity, independent thinking, writing",
        keyPattern: "If liberty means anything at all, it means the right to tell people what they do not want to hear.",
        color: "from-gray-600 to-slate-800",
        prompts: {
            excavation: {
                question: "What lie is your society/group currently telling itself?",
                helper: "Are you silent because you fear the mob?",
            },
            installation: {
                framework: "If writing/speaking → Then use plain words; avoid euphemisms.",
                microTests: [
                    "Change a passive voice sentence to active.",
                    "Call a bad thing by its real name.",
                    "Critique your own 'side'."
                ]
            },
            validation: {
                check1: "Did I speak clearly?",
                check2: "Did I resist the groupthink?"
            }
        }
    },
    {
        id: "hunter-s-thompson",
        name: "Hunter S. Thompson",
        subtitle: "The Gonzo Journalist",
        category: "Creativity",
        algorithm: "Buy the ticket, take the ride. Participation, not observation.",
        useFor: "Immersive work, breaking rules, energy",
        keyPattern: "Too weird to live, too rare to die.",
        color: "from-red-500 to-yellow-500",
        prompts: {
            excavation: {
                question: "Where are you being too polite and boring?",
                helper: "Are you reporting on life or living it?",
            },
            installation: {
                framework: "If observing → Then jump into the middle of the action.",
                microTests: [
                    "Say something shocking to break the tension.",
                    "Go to the weirdest place in your city.",
                    "Write continuously without editing for 10 minutes."
                ]
            },
            validation: {
                check1: "Was I wild?",
                check2: "Did I ignore the rules?"
            }
        }
    },
    {
        id: "oscar-wilde",
        name: "Oscar Wilde",
        subtitle: "The Aesthete",
        category: "Creativity",
        algorithm: "Life imitates Art far more than Art imitates Life.",
        useFor: "Wit, charm, valuing beauty",
        keyPattern: "Be yourself; everyone else is already taken.",
        color: "from-purple-600 to-pink-700",
        prompts: {
            excavation: {
                question: "Where are you being dull and practical?",
                helper: "Are you taking life too seriously?",
            },
            installation: {
                framework: "If faced with a bore → Then say something paradoxical.",
                microTests: [
                    "Wear a buttonhole flower or unique accessory.",
                    "Turn a complaint into a witticism.",
                    "Prioritize beauty over utility for one hour."
                ]
            },
            validation: {
                check1: "Did I amuse myself?",
                check2: "Did I act with style?"
            }
        }
    },
    {
        id: "jrr-tolkien",
        name: "J.R.R. Tolkien",
        subtitle: "The Sub-Creator",
        category: "Creativity",
        algorithm: "Depth of background creates the reality of the foreground.",
        useFor: "World-building, long-term projects, linguistic precision",
        keyPattern: "Not all those who wander are lost.",
        color: "from-green-700 to-emerald-900",
        prompts: {
            excavation: {
                question: "Where is your work shallow or rushed?",
                helper: "Have you built the history behind your idea?",
            },
            installation: {
                framework: "If creating → Then know 10x more about the subject than you show.",
                microTests: [
                    "Write a backstory for a minor character/feature.",
                    "Draw a map of your project.",
                    "Invent a word or term."
                ]
            },
            validation: {
                check1: "Did I dig deep?",
                check2: "Did I craft with care?"
            }
        }
    },
    {
        id: "andy-warhol",
        name: "Andy Warhol",
        subtitle: "The Pop Artist",
        category: "Innovation",
        algorithm: "Making money is art and working is art and good business is the best art.",
        useFor: "Branding, repetition, commercial success",
        keyPattern: "In the future, everyone will be world-famous for 15 minutes.",
        color: "from-pink-500 to-yellow-400",
        prompts: {
            excavation: {
                question: "Why do you think art and money are separate?",
                helper: "Are you afraid of 'selling out'?",
            },
            installation: {
                framework: "If you have an image → Then repeat it until it becomes iconic.",
                microTests: [
                    "Turn a mundane object into content.",
                    "Celebrate surface level aesthetics.",
                    "Treat your persona as a product."
                ]
            },
            validation: {
                check1: "Did I embrace the commercial?",
                check2: "Did I repeat the message?"
            }
        }
    },
    {
        id: "banksy",
        name: "Banksy",
        subtitle: "The Subversive",
        category: "Creativity",
        algorithm: "Destroy to create. Anonymity is power.",
        useFor: "Guerrilla marketing, political statements, mystique",
        keyPattern: "The greatest crimes in the world are not committed by people breaking the rules but by people following the rules.",
        color: "from-zinc-500 to-black",
        prompts: {
            excavation: {
                question: "Where are you following rules that keep you invisible?",
                helper: "How can you flip the script?",
            },
            installation: {
                framework: "If displaying work → Then place it where it shouldn't be.",
                microTests: [
                    "Do something anonymously.",
                    "Take a piece of your work and destroy/alter it.",
                    "Make a statement in a public place."
                ]
            },
            validation: {
                check1: "Did I subvert expectations?",
                check2: "Did I remain unseen?"
            }
        }
    },
    {
        id: "rick-rubin",
        name: "Rick Rubin",
        subtitle: "The Reducer",
        category: "Creativity",
        algorithm: "The audience comes last. Listen to the Source.",
        useFor: "Producing, editing, taste-making",
        keyPattern: "I have no technical ability. I have no idea how to work the board. I know what I like.",
        color: "from-slate-400 to-gray-600",
        prompts: {
            excavation: {
                question: "Where are you adding noise to perfect silence?",
                helper: "Can you strip it back?",
            },
            installation: {
                framework: "If listening → Then close your eyes and feel; don't think.",
                microTests: [
                    "Remove one instrument/element from the mix.",
                    "Meditate for 20 minutes before working.",
                    "Give feedback purely based on feeling, not technique."
                ]
            },
            validation: {
                check1: "Did I listen?",
                check2: "Did I trust my taste?"
            }
        }
    },
    {
        id: "kanye-west",
        name: "Kanye West",
        subtitle: "The Radical Visionary",
        category: "Confidence",
        algorithm: "Believe in yourself as if you are a god. Create reality.",
        useFor: "Overcoming self-doubt, breaking boundaries, manic energy",
        keyPattern: "I am a god.",
        color: "from-neutral-700 to-stone-500",
        prompts: {
            excavation: {
                question: "Where are you playing small to make others comfortable?",
                helper: "Are you apologizing for your greatness?",
            },
            installation: {
                framework: "If doubted → Then double down and announce your victory early.",
                microTests: [
                    "Call yourself a genius in the mirror.",
                    "Demand perfection from a tool or process.",
                    "Wear something that draws stares."
                ]
            },
            validation: {
                check1: "Did I bet on myself?",
                check2: "Did I refuse to humble myself?"
            }
        }
    },
    {
        id: "david-bowie",
        name: "David Bowie",
        subtitle: "The Chameleon",
        category: "Creativity",
        algorithm: "Kill your persona to birth a new one.",
        useFor: "Reinvention, acting, trend-setting",
        keyPattern: "I don't know where I'm going from here, but I promise it won't be boring.",
        color: "from-orange-500 to-red-600",
        prompts: {
            excavation: {
                question: "Are you bored of who you are?",
                helper: "Is your current identity a trap?",
            },
            installation: {
                framework: "If felt stale → Then change your look, name, or style entirely.",
                microTests: [
                    "Adopt a new alter-ego for a day.",
                    "Listen to a genre you hate.",
                    "Dress like a stranger."
                ]
            },
            validation: {
                check1: "Did I try a new face?",
                check2: "Was I unpredictable?"
            }
        }
    },
    {
        id: "madonna",
        name: "Madonna",
        subtitle: "The Material Girl",
        category: "Resilience",
        algorithm: "Constantly evolve or die. Control the narrative.",
        useFor: "Longevity, controversy, discipline",
        keyPattern: "I'm tough, I'm ambitious, and I know exactly what I want.",
        color: "from-pink-600 to-rose-800",
        prompts: {
            excavation: {
                question: "Where are you letting others define you?",
                helper: "Are you waiting for permission?",
            },
            installation: {
                framework: "If criticized → Then use the controversy as fuel.",
                microTests: [
                    "Do something that shocks your friends.",
                    "Change your workout routine to something harder.",
                    "Demand what you are worth."
                ]
            },
            validation: {
                check1: "Did I control the frame?",
                check2: "Did I push a boundary?"
            }
        }
    },
    {
        id: "beyonce",
        name: "Beyoncé",
        subtitle: "The Perfectionist",
        category: "Discipline",
        algorithm: "Practice until you can't get it wrong.",
        useFor: "Performance, excellence, work ethic",
        keyPattern: "I don't like to gamble, but if there's one thing I'm willing to bet on, it's myself.",
        color: "from-yellow-600 to-amber-800",
        prompts: {
            excavation: {
                question: "Where are you relying on talent instead of preparation?",
                helper: "Have you put in the reps?",
            },
            installation: {
                framework: "If performing → Then rehearse it 100 times first.",
                microTests: [
                    "Record yourself doing your work; critique it.",
                    "Do a run-through in heels (make it harder).",
                    "Fix a microscopic flaw."
                ]
            },
            validation: {
                check1: "Was I flawless?",
                check2: "Did I outwork everyone?"
            }
        }
    },
    {
        id: "lady-gaga",
        name: "Lady Gaga",
        subtitle: "The Monster",
        category: "Creativity",
        algorithm: "Embrace your freak. Vulnerability is power.",
        useFor: "Authenticity, artistic expression, courage",
        keyPattern: "Born this way.",
        color: "from-fuchsia-500 to-purple-800",
        prompts: {
            excavation: {
                question: "What part of you do you think is 'too much'?",
                helper: "That is your superpower. Amplify it.",
            },
            installation: {
                framework: "If feeling weird → Then turn the volume up on the weirdness.",
                microTests: [
                    "Confess a deep insecurity publicly.",
                    "Wear your 'costume'.",
                    "Fight for the underdog."
                ]
            },
            validation: {
                check1: "Did I show my scars?",
                check2: "Did I believe in my art?"
            }
        }
    },
    {
        id: "michael-jordan",
        name: "Michael Jordan",
        subtitle: "His Airness",
        category: "Discipline",
        algorithm: "Take it personally. Win at all costs.",
        useFor: "Competition, excellence, dominance",
        keyPattern: "I took that personally.",
        color: "from-red-600 to-black",
        prompts: {
            excavation: {
                question: "Where are you okay with losing?",
                helper: "Who are you letting beat you?",
            },
            installation: {
                framework: "If someone slights you → Then use it as infinite fuel to destroy them (on the court).",
                microTests: [
                    "Identify a rival and outwork them today.",
                    "Don't leave practice until you make 10 shots in a row.",
                    "Visualize the win in high definition."
                ]
            },
            validation: {
                check1: "Did I dominate?",
                check2: "Did I use the slight?"
            }
        }
    },
    {
        id: "kobe-bryant",
        name: "Kobe Bryant",
        subtitle: "The Black Mamba",
        category: "Discipline",
        algorithm: "The Mamba Mentality: Constant quest to be better today than yesterday.",
        useFor: "Obsession, detail, work ethic",
        keyPattern: "Rest at the end, not in the middle.",
        color: "from-purple-800 to-yellow-500",
        prompts: {
            excavation: {
                question: "Where are you cutting corners?",
                helper: "Are you doing the work in the dark?",
            },
            installation: {
                framework: "If 4am comes → Then get up and train.",
                microTests: [
                    "Watch film (study) of your performance frame by frame.",
                    "Contact 5 mentors for advice.",
                    "Work out twice in one day."
                ]
            },
            validation: {
                check1: "Did I outwork the competition?",
                check2: "Did I pay attention to every detail?"
            }
        }
    },
    {
        id: "serena-williams",
        name: "Serena Williams",
        subtitle: "The Queen of Court",
        category: "Resilience",
        algorithm: "Pressure is a privilege.",
        useFor: "Handling pressure, longevity, power",
        keyPattern: "I really think a champion is defined not by their wins but by how they can recover when they fall.",
        color: "from-pink-600 to-black",
        prompts: {
            excavation: {
                question: "Where are you shrinking from the spotlight?",
                helper: "Are you afraid of your own power?",
            },
            installation: {
                framework: "If the match point arrives → Then hit the ball harder.",
                microTests: [
                    "Put yourself in a high-stakes situation.",
                    "Roar (literally or metaphorically) after a win.",
                    "Forgive yourself for a mistake instantly and refocus."
                ]
            },
            validation: {
                check1: "Did I run towards the pressure?",
                check2: "Did I accept the challenge?"
            }
        }
    }
];

