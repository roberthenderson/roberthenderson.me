import { describe, expect, it } from 'vitest';
import { COMPANIES } from '@/app/constants/companies';
import { CompanyIdEnum } from '@/app/types';

const latestYear = (years: number[] | undefined) =>
  years === undefined ? Number.NaN : Math.max(...years);

describe('COMPANIES', () => {
  it('gives every company a unique id drawn from CompanyIdEnum', () => {
    const ids = COMPANIES.map((company) => company.id);

    expect(new Set(ids).size).toBe(ids.length);
    expect(ids.every((id) => Object.values(CompanyIdEnum).includes(id))).toBe(
      true,
    );
  });

  it('has an entry for every member of CompanyIdEnum', () => {
    const ids = new Set(COMPANIES.map((company) => company.id));

    expect(
      Object.values(CompanyIdEnum).filter((id) => !ids.has(id)),
    ).toStrictEqual([]);
  });

  it('gives every company the fields the work grid and tab rail render', () => {
    for (const company of COMPANIES) {
      expect(company.label.trim()).not.toBe('');
      expect(company.gridLogo).toBeTruthy();
      expect(company.image).toBeTruthy();
    }
  });

  it('assigns every company to a grid row', () => {
    for (const company of COMPANIES) {
      expect(Number.isInteger(company.gridRow)).toBe(true);
      expect(company.gridRow).toBeGreaterThan(0);
    }
  });

  it('fills the grid rows contiguously from row one', () => {
    const rows = [...new Set(COMPANIES.map((company) => company.gridRow))].sort(
      (a, b) => a - b,
    );

    expect(rows).toStrictEqual(rows.map((_, index) => index + 1));
  });

  it('orders the list reverse-chronologically by most recent year', () => {
    const latest = COMPANIES.map((company) => latestYear(company.years));

    expect(latest.every((year) => Number.isFinite(year))).toBe(true);
    for (let i = 1; i < latest.length; i++) {
      expect(latest[i]).toBeLessThanOrEqual(latest[i - 1]);
    }
  });

  it('keeps each company year span ascending', () => {
    for (const company of COMPANIES) {
      const years = company.years as number[];

      expect([...years].sort((a, b) => a - b)).toStrictEqual(years);
    }
  });

  it('gives every company content the detail page can render', () => {
    for (const company of COMPANIES) {
      expect(company.content.length).toBeGreaterThan(0);

      for (const item of company.content) {
        expect(item.description.trim()).not.toBe('');
        expect(item.bullets.length).toBeGreaterThan(0);

        for (const bullet of item.bullets) {
          expect(bullet.text.trim()).not.toBe('');
          expect(bullet.icon).toBeTruthy();
        }
      }
    }
  });

  it('keeps split content year spans inside the company year span', () => {
    for (const company of COMPANIES) {
      const spans = company.content
        .map((item) => item.years)
        .filter((years): years is number[] => years !== undefined);

      if (spans.length === 0) {
        continue;
      }

      const covered = new Set(spans.flat());

      expect([...covered].sort((a, b) => a - b)).toStrictEqual(company.years);
    }
  });
});
