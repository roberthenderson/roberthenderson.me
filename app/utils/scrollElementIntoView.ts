export const scrollElementIntoView = (
  element?: HTMLElement | HTMLDivElement | null,
) =>
  element?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
