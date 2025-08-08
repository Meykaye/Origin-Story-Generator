// Mock API for development - returns sample story data
export const MockAPI = {
  // Sample story data for different topics
  stories: {
    coffee: {
      title: "The Legend of Coffee",
      subtitle: "From Ethiopian Highlands to Global Awakening",
      prologue: "In the misty highlands of Ethiopia, where ancient legends dance with the morning fog, a young goat herder named Kaldi would unknowingly change the course of human civilization forever.",
      chapters: [
        {
          title: "The Dancing Goats",
          content: "Kaldi noticed his goats behaving strangely after eating certain red berries. They danced with unusual energy, their eyes bright and alert. Curious, he tasted the berries himself and felt an incredible surge of vitality coursing through his veins."
        },
        {
          title: "The Monastery Discovery", 
          content: "When Kaldi shared his discovery with the local monastery, the monks were initially skeptical. But after brewing the berries into a dark, aromatic beverage, they found they could stay awake for evening prayers with unprecedented clarity and focus."
        },
        {
          title: "The Merchant's Journey",
          content: "Arab traders discovered this magical brew and carefully guarded its secrets for centuries. They cultivated the plants in Yemen, creating the first coffee houses in Mecca and Constantinople, where scholars and poets gathered to discuss philosophy over steaming cups."
        }
      ],
      epilogue: "From those humble Ethiopian highlands, coffee spread across continents, becoming the world's second-most traded commodity. Today, over 2 billion cups are consumed daily, each one carrying the essence of Kaldi's ancient discovery."
    },
    
    "light bulb": {
      title: "The Illumination Revolution",
      subtitle: "How Edison's Persistence Lit Up the World",
      prologue: "In the gaslit streets of 1879, Thomas Edison sat in his Menlo Park laboratory, surrounded by over 1,000 failed experiments. The world scoffed at his 'impossible' dream of electric light, but Edison knew he was just one attempt away from brilliance.",
      chapters: [
        {
          title: "The Great Challenge",
          content: "Gas lamps flickered dangerously in homes, arc lights were too harsh for indoor use, and candles remained the primary source of evening illumination. Edison envisioned a soft, steady light that could be controlled with the flip of a switch."
        },
        {
          title: "The Carbon Filament Breakthrough",
          content: "After testing platinum, bamboo, and countless other materials, Edison's team discovered that a carbonized cotton thread could glow for over 13 hours without burning out. The first practical incandescent bulb was born on October 21, 1879."
        },
        {
          title: "The Power System Revolution",
          content: "But Edison's genius went beyond the bulb itself. He created the entire electrical distribution system - generators, wiring, meters, and switches - turning electricity from a laboratory curiosity into a practical utility that could power entire cities."
        }
      ],
      epilogue: "Edison's invention didn't just create light; it extended the human day, revolutionized industry, and laid the foundation for our modern electric world. Today, LED bulbs carry forward his legacy, using 75% less energy while lasting 25 times longer than traditional incandescent bulbs."
    },

    internet: {
      title: "The Web That Connected Humanity",
      subtitle: "From ARPANET to the Information Superhighway",
      prologue: "In 1969, in a small UCLA computer lab, a graduate student typed 'LOGIN' to send the first message across what would become the internet. The system crashed after just 'LO', but those two letters would spark a revolution that would connect every corner of human knowledge.",
      chapters: [
        {
          title: "The Cold War Catalyst",
          content: "DARPA, the U.S. Defense Department's research arm, wanted a communication network that could survive nuclear attack. They created ARPANET, a decentralized system where information could find multiple paths to its destination, ensuring no single point of failure could bring down the entire network."
        },
        {
          title: "The Birth of Protocols",
          content: "Vint Cerf and Bob Kahn developed TCP/IP, the fundamental language that allows different computer networks to communicate. This protocol became the universal translator that enabled a global network of networks - the true birth of the Internet."
        },
        {
          title: "The World Wide Web",
          content: "In 1989, Tim Berners-Lee at CERN created the World Wide Web, introducing URLs, HTTP, and HTML. He made the revolutionary decision to make the Web free and open, refusing to patent his invention, believing that information should belong to humanity."
        }
      ],
      epilogue: "From connecting four university computers, the internet now links over 5 billion people worldwide. It has democratized information, revolutionized commerce, and created virtual communities that transcend geographical boundaries. The 'LO' that crashed in 1969 became the 'Hello, World!' that connected all of humanity."
    },

    pizza: {
      title: "The Neapolitan Miracle",
      subtitle: "How Flatbread Became the World's Favorite Food",
      prologue: "In the narrow, cobblestone streets of 18th-century Naples, poor workers needed cheap, portable meals they could eat with one hand while continuing to work. Little did they know they were about to create a culinary phenomenon that would conquer the globe.",
      chapters: [
        {
          title: "The Peasant's Innovation",
          content: "Neapolitan bakers began topping their flatbreads with tomatoes, olive oil, and garlic. Tomatoes, recently arrived from the New World, were initially considered poisonous by the wealthy but embraced by the poor as an affordable and flavorful addition to their simple bread."
        },
        {
          title: "The Margherita Legend",
          content: "In 1889, pizzaiolo Raffaele Esposito created a special pizza for Queen Margherita of Italy, using tomatoes, mozzarella, and basil to represent the Italian flag. The Queen's approval elevated pizza from peasant food to a dish worthy of royalty."
        },
        {
          title: "The American Dream",
          content: "Italian immigrants brought pizza to America in the late 1800s. Gennaro Lombardi opened the first American pizzeria in New York in 1905. American innovations like thicker crusts, pepperoni, and delivery services transformed pizza into a uniquely American experience while honoring its Italian roots."
        }
      ],
      epilogue: "From humble Neapolitan street food, pizza has become a $50 billion global industry. Whether it's thin-crust Margherita in Naples, deep-dish in Chicago, or wood-fired artisanal varieties worldwide, pizza proves that the simplest combinations - bread, sauce, and cheese - can create pure magic."
    },

    democracy: {
      title: "The Power to the People",
      subtitle: "From Ancient Athens to Modern Republics",
      prologue: "In 508 BCE, on the rocky hills of Athens, a radical experiment began. For the first time in human history, ordinary citizens would have a direct say in how they were governed. Cleisthenes, the 'Father of Democracy,' was about to unleash an idea so powerful it would reshape civilization itself.",
      chapters: [
        {
          title: "The Athenian Experiment",
          content: "Athenian democracy was direct and participatory. Citizens gathered in the agora to debate and vote on laws, military actions, and civic policies. Though limited to free male citizens, this system gave birth to concepts of civic duty, public debate, and majority rule that would echo through millennia."
        },
        {
          title: "The Enlightenment Revival",
          content: "After centuries of monarchy and feudalism, Enlightenment thinkers like John Locke, Montesquieu, and Rousseau revived democratic ideals. They introduced concepts of natural rights, separation of powers, and the social contract, laying the intellectual foundation for modern democratic governments."
        },
        {
          title: "The Revolutionary Wave",
          content: "The American Revolution of 1776 and the French Revolution of 1789 put democratic theory into practice. The U.S. Constitution created a republic with representative democracy, while the French Declaration of Rights proclaimed that sovereignty resides in the people, not in kings or nobles."
        }
      ],
      epilogue: "From ancient Athens to modern nations, democracy has evolved from direct participation to representative government, expanding to include all citizens regardless of gender, race, or class. Today, despite its imperfections, democracy remains humanity's best system for ensuring that power serves the people, not the other way around."
    },

    writing: {
      title: "The Memory of Civilization",
      subtitle: "From Cave Paintings to Digital Words",
      prologue: "40,000 years ago, in the flickering light of cave fires, early humans pressed their hands against stone walls and traced the outlines of animals. These first marks were humanity's desperate attempt to preserve thoughts beyond the fragility of memory - the birth of writing itself.",
      chapters: [
        {
          title: "The First Symbols",
          content: "Sumerian scribes in ancient Mesopotamia developed cuneiform around 3400 BCE, using wedge-shaped marks on clay tablets to record trade transactions. What began as simple accounting evolved into complex literature, laws, and epic tales like Gilgamesh - the first written story in human history."
        },
        {
          title: "The Alphabet Revolution",
          content: "The Phoenicians created the first alphabet around 1200 BCE, reducing thousands of symbols to just 22 letters. This revolutionary simplification made literacy accessible beyond the educated elite, spreading through Greek and Roman cultures to become the foundation of Western writing systems."
        },
        {
          title: "The Printing Press Explosion",
          content: "In 1440, Johannes Gutenberg's printing press democratized knowledge, making books affordable and widely available. The Bible was among the first mass-produced books, but soon scientific texts, literature, and revolutionary ideas spread rapidly, fueling the Renaissance and Reformation."
        }
      ],
      epilogue: "From clay tablets to digital screens, writing has evolved as humanity's most powerful tool for preserving and sharing knowledge across time and space. Every word you read carries the DNA of those first cave painters who dared to make their thoughts permanent, creating an unbroken chain of human communication spanning millennia."
    }
  },

  // Simulate API delay for realistic feel
  async generateStory(topic, onProgress) {
    return new Promise((resolve) => {
      const phases = [
        { name: 'planning', message: 'Researching historical records...', duration: 800 },
        { name: 'research', message: 'Analyzing ancient documents...', duration: 1000 },
        { name: 'writing', message: 'Crafting your origin story...', duration: 1200 },
        { name: 'polishing', message: 'Adding the finishing touches...', duration: 600 }
      ];

      let currentPhase = 0;
      let progress = 0;

      const updateProgress = () => {
        if (currentPhase < phases.length) {
          const phase = phases[currentPhase];
          onProgress(phase.name, phase.message, progress);
          
          setTimeout(() => {
            progress += 25;
            currentPhase++;
            if (currentPhase < phases.length) {
              updateProgress();
            } else {
              // Return story based on topic
              const normalizedTopic = topic.toLowerCase().trim();
              let story = this.stories[normalizedTopic];
              
              // If exact match not found, find partial match
              if (!story) {
                const matchingKey = Object.keys(this.stories).find(key => 
                  normalizedTopic.includes(key) || key.includes(normalizedTopic)
                );
                story = this.stories[matchingKey];
              }
              
              // Default story if no match
              if (!story) {
                story = {
                  title: `The Origin of ${topic}`,
                  subtitle: "A Tale of Innovation and Discovery",
                  prologue: `Long ago, in a time when ${topic} was but a dream, visionary minds worked tirelessly to bring this revolutionary concept to life.`,
                  chapters: [
                    {
                      title: "The Spark of Inspiration",
                      content: `The story of ${topic} begins with a simple observation that would change everything. Early pioneers noticed a gap in human experience that needed to be filled.`
                    },
                    {
                      title: "The Journey of Development", 
                      content: `Through years of experimentation, trial and error, and countless iterations, the concept of ${topic} slowly took shape, overcoming seemingly impossible challenges.`
                    },
                    {
                      title: "The Breakthrough Moment",
                      content: `Finally, after much perseverance, the key breakthrough occurred. ${topic} emerged not just as an invention, but as a transformative force that would reshape society.`
                    }
                  ],
                  epilogue: `Today, ${topic} continues to evolve and impact our daily lives in ways its original creators could never have imagined. The legacy of innovation lives on.`
                };
              }
              
              onProgress('complete', 'Story complete!', 100);
              resolve(story);
            }
          }, phase.duration);
        }
      };

      updateProgress();
    });
  },

  // Mock follow-up question answering
  async answerFollowUp(question, originalTopic) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const answers = [
          `That's a fascinating question about ${originalTopic}! Historical records suggest that this aspect developed through a combination of necessity and innovation.`,
          `Great question! The development of ${originalTopic} involved many cultural and technological factors that historians continue to study today.`,
          `Excellent inquiry! This particular aspect of ${originalTopic} emerged due to specific historical circumstances and the ingenuity of early pioneers.`,
          `What an insightful question! The story behind this element of ${originalTopic} involves a complex interplay of social, economic, and technological forces.`
        ];
        
        const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
        resolve(randomAnswer);
      }, 1500); // Simulate API delay
    });
  }
};
