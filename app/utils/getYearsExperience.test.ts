import { afterEach, describe, expect, it, vi } from 'vitest';
import { getYearsExperience } from '@/app/utils/getYearsExperience';

describe('getYearsExperience', () => {
  afterEach(() => vi.useRealTimers());

  it('counts from the 2010 start year to the current year', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2026, 8, 14));

    expect(getYearsExperience()).toBe(16);
  });

  it('rolls over with the calendar year', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2027, 0, 1));

    expect(getYearsExperience()).toBe(17);
  });
});
