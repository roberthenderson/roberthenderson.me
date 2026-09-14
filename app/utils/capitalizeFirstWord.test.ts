import { describe, expect, it } from 'vitest';
import { capitalizeFirstWord } from '@/app/utils/capitalizeFirstWord';

describe('capitalizeFirstWord', () => {
  it('keeps only the first word and capitalizes it', () => {
    expect(capitalizeFirstWord('hello world')).toBe('Hello');
  });

  it('lowercases the rest of the word it keeps', () => {
    expect(capitalizeFirstWord('HELLO')).toBe('Hello');
    expect(capitalizeFirstWord('mIxEd case here')).toBe('Mixed');
  });

  it('handles a single word with no trailing text', () => {
    expect(capitalizeFirstWord('skills')).toBe('Skills');
  });

  it('returns an empty string unchanged', () => {
    expect(capitalizeFirstWord('')).toBe('');
  });
});
