import { FC } from 'react';

export const Logo: FC = () => {
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleLogoClick}
      className="group pb-2 font-dmSerif text-logo sm:pb-1"
    >
      <span className="text-indigo-900 transition-colors dark:text-indigo-300">
        .r
      </span>
      <span className="text-indigo-500 transition-all group-hover:text-indigo-900 max-sm:hidden dark:text-indigo-500 group-hover:dark:text-indigo-300">
        obert
      </span>
    </button>
  );
};
