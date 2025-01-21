export const scrollElementIntoView = (element: HTMLElement | null) => {
  element?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};
