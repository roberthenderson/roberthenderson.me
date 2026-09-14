import { describe, expect, it } from 'vitest';
import { validateEmail } from '@/app/utils/validateEmail';

describe('validateEmail', () => {
  it('accepts ordinary addresses', () => {
    for (const email of [
      'test@example.com',
      'first.last@example.co.uk',
      'someone+tag@example.io',
    ]) {
      expect(validateEmail(email)).not.toBeNull();
    }
  });

  it('ignores case', () => {
    expect(validateEmail('TEST@EXAMPLE.COM')).not.toBeNull();
  });

  it('rejects addresses that are missing a part', () => {
    for (const email of ['', 'nope', 'no-at-sign.com', '@example.com']) {
      expect(validateEmail(email)).toBeNull();
    }
  });

  it('requires a top-level domain of at least two characters', () => {
    expect(validateEmail('someone@example.c')).toBeNull();
    expect(validateEmail('someone@example.co')).not.toBeNull();
  });
});
