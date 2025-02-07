import { RESUME_FILENAME } from '@/app/constants/labels';
import { RESUME_URI } from '@/app/constants/urls';
import { clsxMerge } from '@/app/utils/clsxMerge';
import { sendGAEvent } from '@next/third-parties/google';
import { FC } from 'react';
import { FiDownload } from 'react-icons/fi';
import { LinkButton } from '../base/Button/LinkButton';

interface ResumeButtonProps {
  className?: string;
  label?: string;
}

export const ResumeButton: FC<ResumeButtonProps> = ({ className, label }) => {
  const handleClick = () =>
    sendGAEvent('event', 'download_resume_button_click');

  return (
    <LinkButton
      variant="secondary"
      className={clsxMerge(
        'flex items-center gap-2 font-dmSans text-base md:self-end lg:mb-1.5',
        className,
      )}
      href={RESUME_URI}
      target="_blank"
      download={RESUME_FILENAME}
      prefetch={false}
      onClick={handleClick}
    >
      {label ? label : (
        <>
          <span className="hidden md:inline">Download Resume</span>
          <span className="hidden sm:inline md:hidden">Resume</span>
        </>
      )}
      <FiDownload />
    </LinkButton>
  );
};
