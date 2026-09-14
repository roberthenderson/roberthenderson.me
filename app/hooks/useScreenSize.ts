'use client';

import { useEffect, useMemo, useState } from 'react';
import theme from 'tailwindcss/defaultTheme';
import { useDebouncedCallback } from 'use-debounce';

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  const tailwindScreenSizes = useMemo(() => {
    return {
      isXs: screenSize.width > 0,
      isSm: screenSize.width >= parseInt(theme.screens.sm, 10),
      isMd: screenSize.width >= parseInt(theme.screens.md, 10),
      isLg: screenSize.width >= parseInt(theme.screens.lg, 10),
      isXl: screenSize.width >= parseInt(theme.screens.xl, 10),
      is2xl: screenSize.width >= parseInt(theme.screens['2xl'], 10),
    };
  }, [screenSize]);

  const handleResize = useDebouncedCallback(() => {
    setScreenSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, 250);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return { ...screenSize, ...tailwindScreenSizes };
};
