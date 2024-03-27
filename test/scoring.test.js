import { expect } from "@esm-bundle/chai";

import { scoreTest } from "../lib/scoring.js";

it("Score paged test", () => {
  const result = scoreTest({
    values: {
      candor: { 0: 1, 1: -2 },
      equity: { 0: 1, 1: -2 },
      humility: { 0: 1, 1: -2 },
      modesty: { 0: 1, 1: -2 },
    },
    operation: {
      diligence: { 0: 1, 1: -2 },
      discretion: { 0: 1, 1: -2 },
      orderliness: { 0: 1, 1: -2 },
      precision: { 0: 1, 1: -2 },
    },
    intellect: {
      curiosity: { 0: 1, 1: -2 },
      grandeur: { 0: 1, 1: -2 },
      individuality: { 0: 1, 1: -2 },
      inventiveness: { 0: 1, 1: -2 },
    },
    communication: {
      absolution: { 0: 1, 1: -2 },
      accepting: { 0: 1, 1: -2 },
      adaptability: { 0: 1, 1: -2 },
      composure: { 0: 1, 1: -2 },
    },
    emotions: {
      apprehension: { 0: 1, 1: -2 },
      compassion: { 0: 1, 1: -2 },
      concern: { 0: 1, 1: -2 },
      reliance: { 0: 1, 1: -2 },
    },
    socialization: {
      confidence: { 0: 1, 1: -2 },
      congeniality: { 0: 1, 1: -2 },
      forwardness: { 0: 1, 1: -2 },
      vigor: { 0: 1, 1: -2 },
    },
  });

  expect(result).to.deep.equal({
    values: {
      score: -0.25,
      subtraits: {
        candor: -1.5,
        equity: -1.5,
        humility: 1.5,
        modesty: 0.5,
      },
    },
    operation: {
      score: -0.75,
      subtraits: {
        diligence: -0.5,
        discretion: -1.5,
        orderliness: -0.5,
        precision: -0.5,
      },
    },
    intellect: {
      score: 0,
      subtraits: {
        curiosity: 0.5,
        grandeur: 1.5,
        individuality: -0.5,
        inventiveness: -1.5,
      },
    },
    communication: {
      score: -0.75,
      subtraits: {
        absolution: -1.5,
        accepting: 1.5,
        adaptability: -1.5,
        composure: -1.5,
      },
    },
    emotions: {
      score: 0.75,
      subtraits: {
        apprehension: 1.5,
        compassion: -0.5,
        concern: 0.5,
        reliance: 1.5,
      },
    },
    socialization: {
      score: 0.25,
      subtraits: {
        confidence: -0.5,
        congeniality: -1.5,
        forwardness: 1.5,
        vigor: 1.5,
      },
    },
  });
});
