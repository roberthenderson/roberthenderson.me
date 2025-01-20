import { Dispatch, FC, SetStateAction } from 'react';

interface HeaderProps {
  setIsDark: Dispatch<SetStateAction<boolean>>;
}

export const Header: FC<HeaderProps> = ({ setIsDark }) => {
  const handleModeSwitch = () => setIsDark((prev) => !prev);
  return (
    <header className="flex items-center gap-2">
      <div>This is the header</div>
      <button onClick={handleModeSwitch}>toggle mode</button>
    </header>
  );
};
