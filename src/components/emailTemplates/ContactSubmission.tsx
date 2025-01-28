import { FC } from 'react';

interface ContactSubmissionProps {
  name: string;
  email: string;
  content: string;
}

export const ContactSubmission: FC<Readonly<ContactSubmissionProps>> = ({
  name,
  email,
  content,
}) => {
  return (
    <div>
      <p
        style={{
          borderBottom: '1px solid #94a3b8',
          paddingBottom: '16px',
        }}
      >
        You received a message from {name} {`<${email}>`}:
      </p>
      <p className="py-6">
        {content.split('\n').map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </p>
    </div>
  );
};
