/**
 * Fisher-Yates shuffle. Returns a new array and never mutates the input.
 *
 * Note: this runs during render, so on a statically prerendered page the
 * order is decided at build time and stays fixed until the next deploy.
 */
export const shuffle = <T>(items: readonly T[]): T[] => {
  const result = [...items];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
};
