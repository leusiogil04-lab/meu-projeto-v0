import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Inicializa o Resend com a chave que você colocou no .env.local
const resend = new Resend(process.env.re_DvNvzvWo_2rYq3qdSBQNtyx8RaPd7NKN4);

export async function POST(request: Request) {
  try {
    // 1. Pega os dados enviados pelo seu formulário
    const { email, message } = await request.json();

    // 2. Envia o e-mail usando o Resend
    const data = await resend.emails.send({
      from: 'Site Contato <onboarding@resend.dev>',
      to: ['leusiogil04@gmail.com'], 
      subject: 'Novo Contato do Site',
      html: `
        <h1>Nova mensagem de contato</h1>
        <p><strong>De:</strong> ${email}</p>
        <p><strong>Mensagem:</strong> ${message}</p>
      `,
    });

    // 3. Retorna sucesso para o seu botão
    return NextResponse.json({ success: true, data });
  } catch (error) {
    // Retorna erro se algo falhar
    return NextResponse.json({ error: 'Falha ao enviar e-mail' }, { status: 500 });
  }
}