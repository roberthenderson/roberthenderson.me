import { ContactConfirmation } from '@/src/components/emailTemplates/ContactConfirmation';
import { capitalizeFirstWord } from '@/src/utils/capitalizeFirstWord';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, content } = JSON.parse(req.body);
  const { data, error } = await resend.emails.send({
    from: `Robert Henderson <${process.env.SITE_EMAIL}>`,
    to: [email],
    bcc: [`${process.env.GMAIL}`],
    subject: 'Thanks for contacting me ' + capitalizeFirstWord(name),
    react: await ContactConfirmation({ name, content }),
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};
