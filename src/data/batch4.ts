import type { Archetype } from '../types';

export const batch4: Archetype[] = [
    {
        id: "muhammad-ali",
        name: "Muhammad Ali",
        subtitle: "The Greatest",
        category: "Confidence",
        algorithm: "Float like a butterfly, sting like a bee. Psych out the opponent.",
        useFor: "Self-belief, performative confidence, mental warfare",
        keyPattern: "I am the greatest, I said that even before I knew I was.",
        color: "from-red-600 to-yellow-500",
        prompts: {
            excavation: {
                question: "Where are you speaking modestly when you should be roaring?",
                helper: "Are you afraid to announce your victory?",
            },
            installation: {
                framework: "If preparing for battle → Then announce you have already won.",
                microTests: [
                    "Write down 'I am the greatest at [skill]'.",
                    "Tease your obstacle like it's a weak opponent.",
                    "Visualize the knockout punch in slow motion."
                ]
            },
            validation: {
                check1: "Did I speak with conviction?",
                check2: "Did I psych them out?"
            }
        }
    },
    {
        id: "alan-turing",
        name: "Alan Turing",
        subtitle: "The Codebreaker",
        category: "Innovation",
        algorithm: "Anything computable can be simulated. Break the enigma.",
        useFor: "Cryptography, complex logic, solving 'impossible' puzzles",
        keyPattern: "Sometimes it is the people no one imagines anything of who do the things that no one can imagine.",
        color: "from-slate-700 to-emerald-800",
        prompts: {
            excavation: {
                question: "What puzzle are you calling 'impossible'?",
                helper: "Is it impossible or just encrypted?",
            },
            installation: {
                framework: "If code is unbreakable → Then build a machine to break it.",
                microTests: [
                    "Look for the pattern in the noise.",
                    "Automate a manual thought process.",
                    "Work alone on the hardest part."
                ]
            },
            validation: {
                check1: "Did I crack the code?",
                check2: "Did I think mechanically?"
            }
        }
    },
    {
        id: "amelia-earhart",
        name: "Amelia Earhart",
        subtitle: "The Pioneer",
        category: "Resilience",
        algorithm: "Adventure is worthwhile in itself.",
        useFor: "Exploration, breaking gender norms, courage",
        keyPattern: "The most effective way to do it, is to do it.",
        color: "from-sky-600 to-amber-700",
        prompts: {
            excavation: {
                question: "Where are you waiting for perfect conditions to fly?",
                helper: "Why aren't you in the air?",
            },
            installation: {
                framework: "If the horizon calls → Then go, even if you go alone.",
                microTests: [
                    "Go somewhere you've never been today.",
                    "Do something 'uncool' or 'unladylike/unmanly'.",
                    "Take the controls."
                ]
            },
            validation: {
                check1: "Did I fly?",
                check2: "Did I leave the map?"
            }
        }
    },
    {
        id: "ada-lovelace",
        name: "Ada Lovelace",
        subtitle: "The First Programmer",
        category: "Innovation",
        algorithm: "Poetical Science. Imagining what doesn't exist yet.",
        useFor: "Bridging art and logic, foresight",
        keyPattern: "The Analytical Engine weaves algebraic patterns just as the Jacquard loom weaves flowers and leaves.",
        color: "from-purple-600 to-rose-500",
        prompts: {
            excavation: {
                question: "Where are you separating art from logic?",
                helper: "Can you see the poetry in the machine?",
            },
            installation: {
                framework: "If analyzing data → Then look for the aesthetic beauty in the pattern.",
                microTests: [
                    "Describe your technical work as a poem.",
                    "Predict the future of your tool.",
                    "Combine two disciplines."
                ]
            },
            validation: {
                check1: "Did I see the weave?",
                check2: "Did I mix art and science?"
            }
        }
    },
    {
        id: "wilt-chamberlain",
        name: "Wilt Chamberlain",
        subtitle: "The Record Breaker",
        category: "Discipline",
        algorithm: "Statistical dominance. Do it 100 times.",
        useFor: "Setting records, endurance, overwhelming force",
        keyPattern: "Nobody roots for Goliath.",
        color: "from-yellow-600 to-purple-900",
        prompts: {
            excavation: {
                question: "Where are you stopping at 'good enough'?",
                helper: "Why not score 100 points?",
            },
            installation: {
                framework: "If playing → Then don't stop scoring until the buzzer.",
                microTests: [
                    "Do double the required reps.",
                    "Track a metric no one else tracks.",
                    "Be unapologetically big."
                ]
            },
            validation: {
                check1: "Did I break the record?",
                check2: "Did I ignore the booing?"
            }
        }
    },
    {
        id: "j-robert-oppenheimer",
        name: "J. Robert Oppenheimer",
        subtitle: "The Destroyer of Worlds",
        category: "Leadership",
        algorithm: "Theoretical brilliance meets practical management.",
        useFor: "Managing geniuses, high-stakes moral dilemmas",
        keyPattern: "Now I am become Death, the destroyer of worlds.",
        color: "from-slate-700 to-orange-900",
        prompts: {
            excavation: {
                question: "What power are you afraid to unleash?",
                helper: "Are you ready for the consequences of success?",
            },
            installation: {
                framework: "If leading geniuses → Then guide the discussion, don't dictate the answer.",
                microTests: [
                    "Synthesize two opposing viewpoints.",
                    "Read Sanskrit (learn a dead language/skill).",
                    "Accept the weight of your creation."
                ]
            },
            validation: {
                check1: "Did I unify the team?",
                check2: "Did I accept the cost?"
            }
        }
    },
    {
        id: "tiger-woods",
        name: "Tiger Woods",
        subtitle: "The Machine",
        category: "Focus",
        algorithm: "Total compartmentalization. Hello World.",
        useFor: "Precision, shutting out distractions, comeback",
        keyPattern: "Winning takes care of everything.",
        color: "from-red-700 to-black",
        prompts: {
            excavation: {
                question: "Where is your personal life bleeding into your work?",
                helper: "Can you block it out for 4 hours?",
            },
            installation: {
                framework: "If standing over the ball → Then the world ceases to exist.",
                microTests: [
                    "Practice the same motion 1,000 times.",
                    "Wear your 'Saturday Red' (power color).",
                    "Don't smile until the job is done."
                ]
            },
            validation: {
                check1: "Did I lock in?",
                check2: "Did I execute under pressure?"
            }
        }
    },
    {
        id: "georgia-okeeffe",
        name: "Georgia O'Keeffe",
        subtitle: "The Mother of Modernism",
        category: "Creativity",
        algorithm: "Magnify the unnoticed. Make them look.",
        useFor: "Visual arts, purity, nature",
        keyPattern: "I found I could say things with color and shapes that I couldn't say any other way.",
        color: "from-pink-400 to-rose-600",
        prompts: {
            excavation: {
                question: "What small beauty are you walking past?",
                helper: "Can you make it huge?",
            },
            installation: {
                framework: "If creating → Then zoom in until the subject becomes abstract.",
                microTests: [
                    "Draw a flower as big as a building.",
                    "Simplify your wardrobe to black and white.",
                    "Move to the desert (find your solitude)."
                ]
            },
            validation: {
                check1: "Did I make them look?",
                check2: "Did I strip away the noise?"
            }
        }
    },
    {
        id: "pt-barnum",
        name: "P.T. Barnum",
        subtitle: "The Showman",
        category: "Strategic Thinking",
        algorithm: "There's a sucker born every minute. Entertain them.",
        useFor: "Marketing, hype, storytelling",
        keyPattern: "Whatever you do, do it with all your might.",
        color: "from-red-600 to-yellow-500",
        prompts: {
            excavation: {
                question: "Where are you being boring?",
                helper: "Can you add a 'Fiji Mermaid' hook?",
            },
            installation: {
                framework: "If selling → Then create a spectacle, not a pitch.",
                microTests: [
                    "Exaggerate a feature for effect.",
                    "Create a hoax/mystery.",
                    "Make them laugh, then take their money."
                ]
            },
            validation: {
                check1: "Was it a show?",
                check2: "Did I capture attention?"
            }
        }
    },
    {
        id: "alexander-hamilton",
        name: "Alexander Hamilton",
        subtitle: "The Writer",
        category: "Discipline",
        algorithm: "Write like you're running out of time.",
        useFor: "Output, arguing, financial systems",
        keyPattern: "Why do you write like you're running out of time?",
        color: "from-amber-600 to-green-800",
        prompts: {
            excavation: {
                question: "Where are you waiting for permission to speak?",
                helper: "Why aren't you publishing?",
            },
            installation: {
                framework: "If you have an idea → Then write 51 essays about it.",
                microTests: [
                    "Write 2,000 words today.",
                    "Debate a rival publicly.",
                    "Build a system that lasts."
                ]
            },
            validation: {
                check1: "Did I produce?",
                check2: "Did I win the argument?"
            }
        }
    },
    {
        id: "catherine-the-great",
        name: "Catherine the Great",
        subtitle: "The Enlightened Empress",
        category: "Leadership",
        algorithm: "Expand the empire. Patronize the arts.",
        useFor: "Expansion, culture, governance",
        keyPattern: "Power without a nation's confidence is nothing.",
        color: "from-yellow-500 to-blue-800",
        prompts: {
            excavation: {
                question: "Where are you playing small in your domain?",
                helper: "Why not annex the adjacent territory?",
            },
            installation: {
                framework: "If ruling → Then bring in the philosophers and artists.",
                microTests: [
                    "Read a banned book.",
                    "Acquire a competitor or new skill.",
                    "Reform a broken law/rule."
                ]
            },
            validation: {
                check1: "Did I expand?",
                check2: "Did I enlighten?"
            }
        }
    },
    {
        id: "nicolaus-copernicus",
        name: "Nicolaus Copernicus",
        subtitle: "The Heliocentric",
        category: "Innovation",
        algorithm: "Stop assuming you are the center of the universe.",
        useFor: "Perspective shifts, humility, astronomy",
        keyPattern: "To know that we know what we know, and to know that we do not know what we do not know, that is true knowledge.",
        color: "from-indigo-800 to-slate-900",
        prompts: {
            excavation: {
                question: "Where are you assuming everything revolves around you?",
                helper: "What if you are just a satellite?",
            },
            installation: {
                framework: "If blocked → Then shift the center of the model.",
                microTests: [
                    "Argue a point from the other person's perspective entirely.",
                    "Map the system with yourself on the edge.",
                    "Draft a revolution quietly."
                ]
            },
            validation: {
                check1: "Did I shift the center?",
                check2: "Did I see the orbit?"
            }
        }
    },
    {
        id: "rosa-parks",
        name: "Rosa Parks",
        subtitle: "The Quiet Rebel",
        category: "Resilience",
        algorithm: "No.",
        useFor: "Civil disobedience, dignity, boundaries",
        keyPattern: "I had no idea that history was being made. I was just tired of giving in.",
        color: "from-stone-600 to-slate-800",
        prompts: {
            excavation: {
                question: "Where are you moving to the back of the bus?",
                helper: "Where do you need to sit still?",
            },
            installation: {
                framework: "If ordered to degrade yourself → Then simply refuse to move.",
                microTests: [
                    "Say 'No' to a request without apology.",
                    "Sit in the 'best seat' in the room.",
                    "Maintain dignity in the face of shouting."
                ]
            },
            validation: {
                check1: "Did I stay seated?",
                check2: "Did I keep my dignity?"
            }
        }
    },
    {
        id: "sigmund-freud",
        name: "Sigmund Freud",
        subtitle: "The Dream Analyst",
        category: "Wisdom",
        algorithm: "Everything is a symbol. Dig into the childhood.",
        useFor: "Psychoanalysis, understanding drives, subconscious",
        keyPattern: "The interpretation of dreams is the royal road to a knowledge of the unconscious activities of the mind.",
        color: "from-stone-700 to-red-900",
        prompts: {
            excavation: {
                question: "What are you accidentally revealing?",
                helper: "Is that a cigar or a symbol?",
            },
            installation: {
                framework: "If a slip of tongue occurs → Then assume it's the truth.",
                microTests: [
                    "Analyze your dream from last night.",
                    "Ask 'Who does this person remind me of?'",
                    "Identify a repressed desire."
                ]
            },
            validation: {
                check1: "Did I analyze the symbol?",
                check2: "Did I find the drive?"
            }
        }
    },
    {
        id: "sherlock-holmes",
        name: "Sherlock Holmes",
        subtitle: "The Detective",
        category: "Focus",
        algorithm: "Eliminate the impossible. Whatever remains is the truth.",
        useFor: "Deduction, solving mysteries, observation",
        keyPattern: "Data! Data! Data! I can't make bricks without clay.",
        color: "from-slate-600 to-stone-800",
        prompts: {
            excavation: {
                question: "What detail are you missing because it's 'obvious'?",
                helper: "Did the dog bark in the night?",
            },
            installation: {
                framework: "If solving → Then Observe, Deduce, Eliminate.",
                microTests: [
                    "Deduce the history of an object by looking at its wear.",
                    "Sit in a 'mind palace' for 15 minutes.",
                    "Notice what is *absent*.",
                ]
            },
            validation: {
                check1: "Did I eliminate the impossible?",
                check2: "Did I see what others missed?"
            }
        }
    },
    {
        id: "simone-de-beauvoir",
        name: "Simone de Beauvoir",
        subtitle: "The Existentialist",
        category: "Wisdom",
        algorithm: "One is not born, but rather becomes, a woman (or a self).",
        useFor: "Freedom, feminism, defining your own existence",
        keyPattern: "Change your life today. Don't gamble on the future, act now, without delay.",
        color: "from-red-700 to-rose-900",
        prompts: {
            excavation: {
                question: "Where are you accepting a role handed to you?",
                helper: "Are you being an object or a subject?",
            },
            installation: {
                framework: "If feeling defined by others → Then commit an act of radical freedom.",
                microTests: [
                    "Reject a label someone puts on you.",
                    "Go to a café and write about your freedom.",
                    "Choose a path 'expected' of the opposite gender/role."
                ]
            },
            validation: {
                check1: "Did I choose myself?",
                check2: "Did I reject the role?"
            }
        }
    },
    {
        id: "babe-ruth",
        name: "Babe Ruth",
        subtitle: "The Sultan of Swat",
        category: "Confidence",
        algorithm: "Call your shot. Swing big.",
        useFor: "Showmanship, risk-taking, home runs",
        keyPattern: "Never let the fear of striking out get in your way.",
        color: "from-blue-800 to-red-800",
        prompts: {
            excavation: {
                question: "Where are you bunting safely?",
                helper: "Why not swing for the fences?",
            },
            installation: {
                framework: "If at the plate → Then point to the fences.",
                microTests: [
                    "Make a bold prediction publicly.",
                    "Eat/drink/live with gusto today.",
                    "Accept a strikeout with a smile."
                ]
            },
            validation: {
                check1: "Did I call the shot?",
                check2: "Did I swing hard?"
            }
        }
    },
    {
        id: "james-clear",
        name: "James Clear",
        subtitle: "The Habit Architect",
        category: "Focus",
        algorithm: "1% Not better everyday. Systems > Goals.",
        useFor: "Consistency, structure, incremental growth",
        keyPattern: "You do not rise to the level of your goals. You fall to the level of your systems.",
        color: "from-slate-500 to-stone-600",
        prompts: {
            excavation: {
                question: "What goal do you have that lacks a system?",
                helper: "Where is the friction?",
            },
            installation: {
                framework: "If failing → Then make the good habit obvious and easy.",
                microTests: [
                    "Put your running shoes by the bed.",
                    "Do the 2-minute version of your habit.",
                    "Stack a new habit on an old one."
                ]
            },
            validation: {
                check1: "Did I build a system?",
                check2: "Did I get 1% better?"
            }
        }
    },
    {
        id: "david-ogilvy",
        name: "David Ogilvy",
        subtitle: "The Father of Advertising",
        category: "Strategic Thinking",
        algorithm: "Sell or else. The consumer is not a moron; she is your wife.",
        useFor: "Copywriting, sales, research",
        keyPattern: "Don't bunt. Aim out of the ball park. Aim for the company of immortals.",
        color: "from-red-600 to-black",
        prompts: {
            excavation: {
                question: "Where are you being cute instead of selling?",
                helper: "Does your headline work?",
            },
            installation: {
                framework: "If writing copy → Then give them information, not adjectives.",
                microTests: [
                    "Write 100 headlines for one idea.",
                    "Research the product for 3 weeks before writing.",
                    "Respect the customer's intelligence."
                ]
            },
            validation: {
                check1: "Did it sell?",
                check2: "Did I do my homework?"
            }
        }
    },
    {
        id: "nassim-taleb",
        name: "Nassim Taleb",
        subtitle: "The Antifragile",
        category: "Resilience",
        algorithm: "Love disorder. Cap your downside, unshackle your upside.",
        useFor: "Risk, uncertainty, strength training",
        keyPattern: "Wind extinguishes a candle and energizes fire.",
        color: "from-stone-700 to-black",
        prompts: {
            excavation: {
                question: "Where are you fragile (harmed by chaos)?",
                helper: "How can you position yourself to gain from the crash?",
            },
            installation: {
                framework: "If chaos hits → Then get stronger, not just survive.",
                microTests: [
                    "Lift heavy weights.",
                    "Take a small risk with infinite upside (convex).",
                    "Do not employ a forecast; employ a hedge."
                ]
            },
            validation: {
                check1: "Was I antifragile?",
                check2: "Did I benefit from the shock?"
            }
        }
    },
    {
        id: "diogenes",
        name: "Diogenes The Cynic",
        subtitle: "The Dog",
        category: "Wisdom",
        algorithm: "Mock pretension. Seek an honest man.",
        useFor: "Minimalism, truthfulness, breaking social norms",
        keyPattern: "I am looking for a human.",
        color: "from-yellow-700 to-stone-500",
        prompts: {
            excavation: {
                question: "What social norm is making you miserable?",
                helper: "Why do you need a cup if you have hands?",
            },
            installation: {
                framework: "If someone is arrogant → Then mock them (or yourself).",
                microTests: [
                    "Give away something you think you 'need'.",
                    "Walk backwards in public.",
                    "Tell a king to move out of your sun."
                ]
            },
            validation: {
                check1: "Did I live simply?",
                check2: "Did I mock power?"
            }
        }
    },
    {
        id: "jimi-hendrix",
        name: "Jimi Hendrix",
        subtitle: "The Voodoo Child",
        category: "Creativity",
        algorithm: "Turn the electricity up. Feedback is music.",
        useFor: "Innovation, flow, performance",
        keyPattern: "Knowledge speaks, but wisdom listens.",
        color: "from-purple-700 to-fuchsia-600",
        prompts: {
            excavation: {
                question: "Where are you playing it clean?",
                helper: "Can you add some distortion?",
            },
            installation: {
                framework: "If playing → Then use the noise/feedback as part of the song.",
                microTests: [
                    "Play your instrument lefthanded (upside down).",
                    "Wear velvet.",
                    "Improvise a solo for 5 minutes."
                ]
            },
            validation: {
                check1: "Was it electric?",
                check2: "Did I listen to the feedback?"
            }
        }
    },
    {
        id: "bruce-wayne",
        name: "Bruce Wayne",
        subtitle: "The Dark Knight",
        category: "Discipline",
        algorithm: "Turn fear against those who prey on the fearful.",
        useFor: "Preparation, willpower, justice",
        keyPattern: "It's not who I am underneath, but what I do that defines me.",
        color: "from-slate-900 to-black",
        prompts: {
            excavation: {
                question: "What is your greatest fear?",
                helper: "Can you become it?",
            },
            installation: {
                framework: "If preparing → Then have a contingency plan for everything.",
                microTests: [
                    "Train when you are injured/tired.",
                    "Disappear from a room without being noticed.",
                    "Use your resources to build a tool for justice."
                ]
            },
            validation: {
                check1: "Did I conquer fear?",
                check2: "Did I act in the shadows?"
            }
        }
    },
    {
        id: "kanye-west-mvp",
        name: "Yeezus",
        subtitle: "The God Dreamer",
        category: "Confidence",
        algorithm: "Listen to the kids. Design everything.",
        useFor: "Unwavering belief, aesthetic vision",
        keyPattern: "Name one genius that ain't crazy.",
        color: "from-neutral-500 to-stone-400",
        prompts: {
            excavation: {
                question: "Where are you compromising your vision?",
                helper: "Who told you you couldn't do it?",
            },
            installation: {
                framework: "If told 'no' → Then build it yourself anyway.",
                microTests: [
                    "Sampling: Take a classic and make it new.",
                    "Rant for 5 minutes about your vision.",
                    "Wear a mask."
                ]
            },
            validation: {
                check1: "Did I feel like a god?",
                check2: "Did I create culture?"
            }
        }
    },
    {
        id: "tony-stark",
        name: "Tony Stark",
        subtitle: "The Futurist",
        category: "Innovation",
        algorithm: "Build your way out of the cave. I am Iron Man.",
        useFor: "Engineering, wit, redemption",
        keyPattern: "Sometimes you gotta run before you can walk.",
        color: "from-red-600 to-yellow-500",
        prompts: {
            excavation: {
                question: "What problem are you accepting as 'unsolvable'?",
                helper: "Can you solve it in a cave with a box of scraps?",
            },
            installation: {
                framework: "If defenseless → Then build a suit of armor.",
                microTests: [
                    "Prototype a solution in one night.",
                    "Use sarcasm to deflect a threat.",
                    "Make the sacrifice play."
                ]
            },
            validation: {
                check1: "Did I build it?",
                check2: "Did I learn to fly?"
            }
        }
    }
];

