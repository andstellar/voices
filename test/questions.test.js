import { expect } from "@esm-bundle/chai";

import { personalityTestPaged } from "../lib/questions.js";

it("Get paged test", () => {
  expect(personalityTestPaged(0)).to.deep.equal({
    values: {
      candor:
        "I go out of my way to be extra friendly to people I dislike if it benefits me.",
      equity: "I would rob a bank if I knew I would never get caught.",
      humility: "I do not think of myself as better than others.",
      modesty: "I would like to be richer than the people around me.",
    },
    operation: {
      diligence: "I have specific lofty goals that I am working towards.",
      discretion: "I often make decisions based on my gut feeling.",
      orderliness: "I keep my work and living spaces clean and tidy.",
      precision:
        "It is important to double check your work before submitting it.",
    },
    intellect: {
      curiosity: "I have no interest in the politics of other countries.",
      grandeur: "Art does not require enjoyment to be appreciated.",
      individuality: "It is important to question conventional wisdom.",
      inventiveness: "I prefer well-established routines in my work.",
    },
    communication: {
      absolution:
        "I hold grudges against people who have wronged me in the past.",
      accepting: "It is not my role to judge others.",
      adaptability:
        "It is important to stand your ground in an argument no matter what.",
      composure: "It is better to have a quick temper than to be a pushover.",
    },
    emotions: {
      apprehension: "I would never travel to a city with a high crime rate.",
      compassion: "I feel emotions more strongly than most people do.",
      concern: "I am confident things will work out for the best.",
      reliance: "When I'm feeling down, I need someone to talk to about it.",
    },
    socialization: {
      confidence: "I am happy with who I am as a person.",
      congeniality: "I do not see the point of small talk.",
      forwardness: "I make sure my voice is heard in group settings.",
      vigor: "I have spare energy at the end of the day.",
    },
  });
});
