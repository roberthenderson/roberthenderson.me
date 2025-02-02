import { capitalizeFirstWord } from '@/app/utils/capitalizeFirstWord';
import { FC } from 'react';

interface ContactConfirmationProps {
  name: string;
  content: string;
}

export const ContactConfirmation: FC<Readonly<ContactConfirmationProps>> = ({
  name,
  content,
}) => {
  const firstName = capitalizeFirstWord(name);
  return (
    <div>
      <p>Hi {firstName},</p>
      <div
        style={{
          paddingBottom: '16px',
          marginBottom: '16px',
        }}
      >
        <p>
          Thanks so much for reaching out. I will reply to you as soon as
          possible. A copy of your message is below.
        </p>
        <p>I look forward to chatting.</p>
        <p>Robert</p>
      </div>
      <div
        style={{
          borderLeft: '3px solid #94a3b8',
          paddingLeft: '16px',
        }}
      >
        {content.split('\n').map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
};
