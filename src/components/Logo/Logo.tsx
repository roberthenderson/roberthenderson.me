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
      <span className="text-purple-900 transition-colors dark:text-purple-400">
        .r
      </span>
      <span className="transition-all group-hover:text-purple-900 max-sm:hidden dark:text-purple-600 group-hover:dark:text-purple-400">
        obert
      </span>
    </button>
  );
};
