import { ContactSubmission } from '@/app/components/emailTemplates/ContactSubmission';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, content } = await req.json();
  try {
    const { data, error } = await resend.emails.send({
      from: `Robert Henderson <${process.env.CONTACT_EMAIL}>`,
      to: [`${process.env.SITE_EMAIL}`],
      replyTo: email,
      subject: `${name} has sent you a message`,
      react: await ContactSubmission({ name, email, content }),
    });

    if (error) {
      return Response.json({ error }, { status: 400 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 400 });
  }
}
