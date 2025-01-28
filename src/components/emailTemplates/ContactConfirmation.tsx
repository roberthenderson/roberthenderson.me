import { capitalizeFirstWord } from '@/src/utils/capitalizeFirstWord';
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
        <p>Thanks, and I look forward to chatting.</p>
        <p>Robert</p>
      </div>
      <div
        style={{
          borderLeft: '3px solid #1e293b',
          paddingTop: '16px',
          paddingBottom: '16px',
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
