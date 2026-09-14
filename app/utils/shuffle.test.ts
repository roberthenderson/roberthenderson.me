import { afterEach, describe, expect, it, vi } from 'vitest';
import { shuffle } from '@/app/utils/shuffle';

describe('shuffle', () => {
  afterEach(() => vi.restoreAllMocks());

  it('never mutates the input', () => {
    const items = ['a', 'b', 'c', 'd'];
    const snapshot = [...items];

    const result = shuffle(items);

    expect(items).toStrictEqual(snapshot);
    expect(result).not.toBe(items);
  });

  it('returns a permutation, keeping every item exactly once', () => {
    const items = ['a', 'b', 'c', 'd', 'e', 'f'];

    const result = shuffle(items);

    expect(result).toHaveLength(items.length);
    expect([...result].sort()).toStrictEqual([...items].sort());
  });

  it('reorders according to Math.random', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0);

    expect(shuffle(['a', 'b', 'c'])).toStrictEqual(['b', 'c', 'a']);
  });

  it('handles empty and single-item lists', () => {
    expect(shuffle([])).toStrictEqual([]);
    expect(shuffle(['only'])).toStrictEqual(['only']);
  });
});
