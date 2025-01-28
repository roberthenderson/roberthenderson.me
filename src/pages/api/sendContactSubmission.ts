import { ContactSubmission } from '@/src/components/emailTemplates/ContactSubmission';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, content } = JSON.parse(req.body);
  const { data, error } = await resend.emails.send({
    from: `Robert Henderson <${process.env.CONTACT_EMAIL}>`,
    to: [`${process.env.SITE_EMAIL}`],
    replyTo: email,
    subject: `${name} has sent you a message`,
    react: await ContactSubmission({ name, email, content }),
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};
