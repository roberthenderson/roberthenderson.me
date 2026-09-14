import { describe, expect, it } from 'vitest';
import { formatGAErrorString } from '@/app/utils/formatGAErrorString';

describe('formatGAErrorString', () => {
  it('brackets the error name and message', () => {
    expect(formatGAErrorString(new Error('Something broke'))).toBe(
      '[Error:Something broke]',
    );
  });

  it('keeps the specific error type', () => {
    expect(formatGAErrorString(new TypeError('bad type'))).toBe(
      '[TypeError:bad type]',
    );
  });

  it('strips punctuation so the label stays a stable GA value', () => {
    expect(
      formatGAErrorString(new Error("Cannot read 'x' of undefined.")),
    ).toBe('[Error:Cannot read x of undefined]');
  });

  it('handles an empty message', () => {
    expect(formatGAErrorString(new Error(''))).toBe('[Error:]');
  });
});
