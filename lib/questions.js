/** @typedef {'values' | 'operation' | 'intellect' | 'communication' | 'emotions' | 'socialization'} Category */

/** @type {Record<Category, {mean: number, stdev: number, subtraits: Record<string, { mean: number, stdev: number, statements: Array<{text: string, weight: 1 | -1}>}>}>} */
export const personalityTest = {
  values: {
    mean: 0.19,
    stdev: 0.62,
    subtraits: {
      candor: {
        mean: 0.2,
        stdev: 0.78,
        statements: [
          {
            text: "I go out of my way to be extra friendly to people I dislike if it benefits me.",
            weight: -1,
          },
          {
            text: "It is wrong to use flattery to get ahead.",
            weight: 1,
          },
          {
            text: "I fake laugh at jokes to make a better impression on important people.",
            weight: -1,
          },
          {
            text: "I would pretend to be friends with someone in order to get them to do me a favor.",
            weight: -1,
          },
        ],
      },
      equity: {
        mean: 0.34,
        stdev: 0.98,
        statements: [
          {
            text: "I would rob a bank if I knew I would never get caught.",
            weight: -1,
          },
          {
            text: "It is wrong to buy items that are likely to be stolen goods even if you can't afford them otherwise.",
            weight: 1,
          },
          {
            text: "Bribery is never justifiable.",
            weight: 1,
          },
          {
            text: "If I was given counterfeit money, I would try to spend it.",
            weight: -1,
          },
        ],
      },
      modesty: {
        mean: -0.28,
        stdev: 0.98,
        statements: [
          {
            text: "I would like to be richer than the people around me.",
            weight: -1,
          },
          {
            text: "I would prefer to live in the richest neighborhood in town.",
            weight: -1,
          },
          {
            text: "Cars are a means of transportation, not a status symbol.",
            weight: 1,
          },
          {
            text: "Material possessions do not bring happiness.",
            weight: 1,
          },
        ],
      },
      humility: {
        mean: 0.49,
        stdev: 0.78,
        statements: [
          {
            text: "I do not think of myself as better than others.",
            weight: 1,
          },
          {
            text: "I like being treated special because I am special.",
            weight: -1,
          },
          {
            text: "Everyone is deserving of the same amount of respect, myself included.",
            weight: 1,
          },
          {
            text: "I would prefer to be famous.",
            weight: -1,
          },
        ],
      },
    },
  },
  operation: {
    mean: 0.44,
    stdev: 0.56,
    subtraits: {
      orderliness: {
        mean: 0.26,
        stdev: 0.91,
        statements: [
          {
            text: "I keep my work and living spaces clean and tidy.",
            weight: 1,
          },
          {
            text: "My future plans are always well organized.",
            weight: 1,
          },
          {
            text: "Other people comment on how messy or disorganized I am.",
            weight: -1,
          },
          {
            text: "Disorganization has caused me to miss important deadlines.",
            weight: -1,
          },
        ],
      },
      diligence: {
        mean: 0.79,
        stdev: 0.68,
        statements: [
          {
            text: "I have specific lofty goals that I am working towards.",
            weight: 1,
          },
          {
            text: "I keep working on a task until it is completed.",
            weight: 1,
          },
          {
            text: "Quitting is a justifiable option in some situations.",
            weight: -1,
          },
          {
            text: "I look for ways to cut corners in my work to save time.",
            weight: -1,
          },
        ],
      },
      precision: {
        mean: 0.5,
        stdev: 0.78,
        statements: [
          {
            text: "It is important to double check your work before submitting it.",
            weight: 1,
          },
          {
            text: "I am detail oriented.",
            weight: 1,
          },
          {
            text: "It is better to be on time than to be perfect.",
            weight: -1,
          },
          {
            text: "Making mistakes is inevitable, so there is no need to be overly cautious.",
            weight: -1,
          },
        ],
      },
      discretion: {
        mean: 0.18,
        stdev: 0.75,
        statements: [
          {
            text: "I often make decisions based on my gut feeling.",
            weight: -1,
          },
          {
            text: "Every decision should be made after careful consideration.",
            weight: 1,
          },
          {
            text: "There is no such thing as a perfect decision, regardless of how much time is spent making it.",
            weight: -1,
          },
          {
            text: "Flexibility is more valuable than sticking to a plan.",
            weight: -1,
          },
        ],
      },
    },
  },
  intellect: {
    mean: 41,
    stdev: 0.6,
    subtraits: {
      grandeur: {
        mean: 0.34,
        stdev: 0.88,
        statements: [
          {
            text: "Art does not require enjoyment to be appreciated.",
            weight: 1,
          },
          {
            text: "The purpose of a movie is to entertain.",
            weight: -1,
          },
          {
            text: "I like to be challenged by the music I listen to.",
            weight: 1,
          },
          {
            text: "Art can be found anywhere, not just in museums.",
            weight: 1,
          },
        ],
      },
      curiosity: {
        mean: 0.19,
        stdev: 0.88,
        statements: [
          {
            text: "I have no interest in the politics of other countries.",
            weight: -1,
          },
          {
            text: "Geography is not a subject that interests me.",
            weight: -1,
          },
          {
            text: "I enjoy learning how we discovered new scientific facts or technologies.",
            weight: 1,
          },
          {
            text: "I often get lost in Wikipedia rabbit holes.",
            weight: 1,
          },
        ],
      },
      inventiveness: {
        mean: 0.63,
        stdev: 0.85,
        statements: [
          {
            text: "I prefer well-established routines in my work.",
            weight: -1,
          },
          {
            text: "I often come up with ideas for art, music, or stories.",
            weight: 1,
          },
          {
            text: "I have a lot of ideas for new products or services.",
            weight: 1,
          },
          {
            text: "I have no interest in artistic or creative pursuits.",
            weight: -1,
          },
        ],
      },
      individuality: {
        mean: 0.46,
        stdev: 0.64,
        statements: [
          {
            text: "It is important to question conventional wisdom.",
            weight: 1,
          },
          {
            text: "I like having conversations about radical new ideas.",
            weight: 1,
          },
          {
            text: "I stick to traditional values.",
            weight: -1,
          },
          {
            text: "Philosophy is a waste of time.",
            weight: -1,
          },
        ],
      },
    },
  },
  communication: {
    mean: -0.06,
    stdev: 0.58,
    subtraits: {
      absolution: {
        mean: -0.25,
        stdev: 0.83,
        statements: [
          {
            text: "I hold grudges against people who have wronged me in the past.",
            weight: -1,
          },
          {
            text: "It is important to let go of past grievances and move on.",
            weight: 1,
          },
          {
            text: "Once a cheater, always a cheater.",
            weight: -1,
          },
          {
            text: "I am capable of truly forgiving someone who has wronged me.",
            weight: 1,
          },
        ],
      },
      accepting: {
        mean: 0.17,
        stdev: 0.73,
        statements: [
          {
            text: "It is not my role to judge others.",
            weight: 1,
          },
          {
            text: "I often gossip about other people.",
            weight: -1,
          },
          {
            text: "I am quick to decern the intentions of others.",
            weight: -1,
          },
          {
            text: "I am supportive of people even when they make mistakes.",
            weight: 1,
          },
        ],
      },
      adaptability: {
        mean: -0.26,
        stdev: 0.72,
        statements: [
          {
            text: "It is important to stand your ground in an argument no matter what.",
            weight: -1,
          },
          {
            text: "I enjoy hearing other people's opinions, even if they differ from my own.",
            weight: 1,
          },
          {
            text: "Learning you are wrong is a sign of growth.",
            weight: 1,
          },
          {
            text: "Compromising is a sign of weakness.",
            weight: -1,
          },
        ],
      },
      composure: {
        mean: 0.11,
        stdev: 0.86,
        statements: [
          {
            text: "It is better to have a quick temper than to be a pushover.",
            weight: -1,
          },
          {
            text: "I assume the best in people until proven otherwise.",
            weight: 1,
          },
          {
            text: "I rarely feel anger towards others.",
            weight: 1,
          },
          {
            text: "When people insult me, I insult them back.",
            weight: -1,
          },
        ],
      },
    },
  },
  emotions: {
    mean: 43,
    stdev: 0.62,
    subtraits: {
      apprehension: {
        mean: 0.06,
        stdev: 0.89,
        statements: [
          {
            text: "I would never travel to a city with a high crime rate.",
            weight: 1,
          },
          {
            text: "I would happily take a dangerous job if it paid well enough.",
            weight: -1,
          },
          {
            text: "It doesn't matter if activities like skydiving are fun, there is no need to take unnecessary risks.",
            weight: 1,
          },
          {
            text: "I stay level-headed in stressful situations.",
            weight: -1,
          },
        ],
      },
      concern: {
        mean: 0.69,
        stdev: 0.81,
        statements: [
          {
            text: "I am confident things will work out for the best.",
            weight: -1,
          },
          {
            text: "I rarely worry about things that are out of my control.",
            weight: -1,
          },
          {
            text: "I have trouble sleeping when I'm worried about something.",
            weight: 1,
          },
          {
            text: "Waiting to hear about something important makes me anxious.",
            weight: 1,
          },
        ],
      },
      reliance: {
        mean: 0.38,
        stdev: 0.87,
        statements: [
          {
            text: "When I'm feeling down, I need someone to talk to about it.",
            weight: 1,
          },
          {
            text: "I can take care of myself.",
            weight: -1,
          },
          {
            text: "I keep my emotions to myself most of the time.",
            weight: -1,
          },
          {
            text: "I prefer to talk through my problems with someone else rather than work through them alone.",
            weight: 1,
          },
        ],
      },
      compassion: {
        mean: 0.58,
        stdev: 0.8,
        statements: [
          {
            text: "I feel emotions more strongly than most people do.",
            weight: 1,
          },
          {
            text: "I feel sad knowing that there are people in the world who are suffering.",
            weight: 1,
          },
          {
            text: "I don't really care about nostalgia or sentimentality.",
            weight: -1,
          },
          {
            text: "I don't understand people who cry at weddings or other life events.",
            weight: -1,
          },
        ],
      },
    },
  },
  socialization: {
    mean: 0.5,
    stdev: 0.57,
    subtraits: {
      confidence: {
        mean: 0.85,
        stdev: 0.68,
        statements: [
          {
            text: "I am happy with who I am as a person.",
            weight: 1,
          },
          {
            text: "Most people think well of me.",
            weight: 1,
          },
          {
            text: "I regularly feel FOMO (fear of missing out).",
            weight: -1,
          },
          {
            text: "I often question my own worth as a person.",
            weight: -1,
          },
        ],
      },
      forwardness: {
        mean: 0.03,
        stdev: 0.87,
        statements: [
          {
            text: "I make sure my voice is heard in group settings.",
            weight: 1,
          },
          {
            text: "I feel uncomfortable making the first move in social situations.",
            weight: -1,
          },
          {
            text: "I enjoy speaking on behalf of a group of people.",
            weight: 1,
          },
          {
            text: "I dread public speaking of any kind.",
            weight: -1,
          },
        ],
      },
      congeniality: {
        mean: 0.59,
        stdev: 0.75,
        statements: [
          {
            text: "I do not see the point of small talk.",
            weight: -1,
          },
          {
            text: "I like meeting new people and making new friends.",
            weight: 1,
          },
          {
            text: "I prefer to work alone rather than in a group.",
            weight: -1,
          },
          {
            text: "I find it easy to make new friends.",
            weight: 1,
          },
        ],
      },
      vigor: {
        mean: 0.52,
        stdev: 0.77,
        statements: [
          {
            text: "I have spare energy at the end of the day.",
            weight: 1,
          },
          {
            text: "I am often tired for no reason.",
            weight: -1,
          },
          {
            text: "I am often in a low mood.",
            weight: -1,
          },
          {
            text: "I am an optimist.",
            weight: 1,
          },
        ],
      },
    },
  },
};

/**
 * @param {number} page
 */
export function personalityTestPaged(page) {
  return Object.fromEntries(
    Object.entries(personalityTest).map(([category, categoryData]) => {
      return [
        category,
        Object.fromEntries(
          Object.entries(categoryData.subtraits).map(
            ([subtrait, subtraitData]) => {
              return [subtrait, subtraitData.statements[page]?.text];
            },
          ),
        ),
      ];
    }),
  );
}
