import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Use a chave diretamente para testar, mas depois mova para o .env.local
const resend = new Resend('re_DvNvzvWo_2rYq3qdSBQNtyx8RaPd7NKN4');

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    const data = await resend.emails.send({
      from: 'Leusio Gil Site <onboarding@resend.dev>',
      to: ['leusiogil04@gmail.com'], 
      subject: `Novo Contato: ${name}`,
      html: `
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong> ${message}</p>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Erro interno no servidor' }, { status: 500 });
  }
}