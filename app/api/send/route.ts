import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend('re_DvNvzvWo_2rYq3qdSBQNtyx8RaPd7NKN4');

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    const data = await resend.emails.send({
      from: 'Site Leusio Gil <onboarding@resend.dev>',
      to: ['leusiogil04@gmail.com'], 
      subject: `Novo Contato: ${subject}`,
      replyTo: email,      html: `
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Assunto:</strong> ${subject}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}