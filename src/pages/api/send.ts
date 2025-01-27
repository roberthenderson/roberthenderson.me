import { EmailTemplate } from '@/src/components/EmailTemplate/EmailTemplate';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { data, error } = await resend.emails.send({
    from: 'Robert Henderson <hello@roberthenderson.me>',
    to: ['rhahenderson@gmail.com'],
    subject: 'Hello world',
    react: await EmailTemplate({ firstName: 'John' }),
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};
