import { personalityTest } from "./questions.js";

// Simplified z-score to percentile bin lookup table for 5% wide bins using numerical values
const zScoreToPercentileBinTable = [
  { z: -1.64, percentileBin: "5%" },
  { z: -1.28, percentileBin: "10%" },
  { z: -0.84, percentileBin: "20%" },
  { z: -0.52, percentileBin: "30%" },
  { z: -0.25, percentileBin: "40%" },
  { z: 0.0, percentileBin: "50%" },
  { z: 0.25, percentileBin: "60%" },
  { z: 0.52, percentileBin: "70%" },
  { z: 0.84, percentileBin: "80%" },
  { z: 1.28, percentileBin: "90%" },
  { z: 1.64, percentileBin: "95%" },
];

/**
 * @param {number} value
 * @param {number} mean
 * @param {number} stdev
 */
export function zScore(value, mean, stdev) {
  return (value - mean) / stdev;
}

/**
 * @param {number} zScore
 */
function findPercentileBinForZScore(zScore) {
  const min = zScoreToPercentileBinTable[0];
  const max = zScoreToPercentileBinTable[zScoreToPercentileBinTable.length - 1];

  if (min === undefined || max === undefined) return undefined;

  if (zScore < min.z) return min.percentileBin;
  else if (zScore > max.z) return max.percentileBin;

  // Find the closest bin by iterating through the table and finding the entry
  // with the minimum difference from the provided zScore
  let closest = zScoreToPercentileBinTable.reduce(
    (prev, curr) =>
      Math.abs(curr.z - zScore) < Math.abs(prev.z - zScore) ? curr : prev,
    min,
  );

  return closest.percentileBin;
}

/**
 * @param {number} value
 * @param {number} mean
 * @param {number} stdev
 */
export function percentile(value, mean, stdev) {
  return findPercentileBinForZScore(zScore(value, mean, stdev));
}

/**
 * @param {import('./questions.js').Category} category
 * @param {string} subtrait
 * @param {number} statementIndex
 * @param {-2 | -1 | 0 | 1 | 2} answer
 */
export function scoreStatement(category, subtrait, statementIndex, answer) {
  return (
    (personalityTest[category].subtraits[subtrait]?.statements[statementIndex]
      ?.weight ?? 0) * answer
  );
}

/**
 * @param {Record<import('./questions.js').Category, Record<string, Record<number, -2 | -1 | 0 | 1 | 2>>>} answers
 * @returns {Record<import('./questions.js').Category, {score: number, subtraits: Record<string, number>}>}
 * */
export function scoreTest(answers) {
  const scores = Object.entries(answers).reduce(
    (acc, [category, categoryAnswers]) => {
      const categoryScore = Object.entries(categoryAnswers).reduce(
        (acc, [subtrait, subtraitAnswers], i) => {
          const subtraitScore = Object.entries(subtraitAnswers).reduce(
            (acc, [statementIndex, statementAnswers], j) => {
              return (
                (j * acc +
                  scoreStatement(
                    category,
                    subtrait,
                    parseInt(statementIndex),
                    statementAnswers,
                  )) /
                (j + 1)
              );
            },
            0,
          );

          return {
            ...acc,
            score: (i * acc.score + subtraitScore) / (i + 1),
            subtraits: {
              ...acc.subtraits,
              [subtrait]: subtraitScore,
            },
          };
        },
        { score: 0, subtraits: {} },
      );

      return {
        ...acc,
        [category]: categoryScore,
      };
    },
    {},
  );

  return scores;
}
