import { FC } from 'react';

export const Logo: FC = () => {
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleLogoClick}
      className="group pb-1 font-dmSerif text-logo"
    >
      <span className="text-violet-900 transition-colors dark:text-violet-400">
        .r
      </span>
      <span className="transition-all group-hover:text-violet-900 max-sm:hidden dark:text-violet-600 group-hover:dark:text-violet-400">
        obert
      </span>
    </button>
  );
};
