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
      isSm: screenSize.width >= parseInt(theme.screens.sm),
      isMd: screenSize.width >= parseInt(theme.screens.md),
      isLg: screenSize.width >= parseInt(theme.screens.lg),
      isXl: screenSize.width >= parseInt(theme.screens.xl),
      is2xl: screenSize.width >= parseInt(theme.screens['2xl']),
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
