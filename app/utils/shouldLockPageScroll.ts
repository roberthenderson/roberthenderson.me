export const shouldLockPageScroll = (lock: boolean) => {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  const body = document.body;
  const scrollbarVisible = body.clientWidth < window.innerWidth;
  console.log({
    scrollbarVisible,
    clientWidth: body.clientWidth,
    windowInnerWidth: window.innerWidth,
  });
  if (lock) {
    body.style.overflow = 'hidden';
    if (scrollbarVisible) {
      body.style.paddingRight = '15px';
    }
  } else {
    body.removeAttribute('style');
  }
};
