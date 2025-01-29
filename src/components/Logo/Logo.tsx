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
      <span className="text-violet-950 transition-colors dark:text-yellow-600">
        .r
      </span>
      <span className="text-violet-600 transition-all group-hover:text-violet-950 max-sm:hidden dark:text-slate-400 group-hover:dark:text-yellow-600">
        obert
      </span>
    </button>
  );
};
