import { ContactConfirmation } from '@/app/components/emailTemplates/ContactConfirmation';
import { capitalizeFirstWord } from '@/app/utils/capitalizeFirstWord';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, content } = await req.json();
  try {
    const { data, error } = await resend.emails.send({
      from: `Robert Henderson <${process.env.SITE_EMAIL}>`,
      to: [email],
      bcc: [`${process.env.GMAIL}`],
      subject: 'Thanks for contacting me ' + capitalizeFirstWord(name),
      react: await ContactConfirmation({ name, content }),
    });

    if (error) {
      return Response.json({ error }, { status: 400 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 400 });
  }
}
