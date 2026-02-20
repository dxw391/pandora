import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        if (!process.env.RESEND_API_KEY) {
            console.error('RESEND_API_KEY non configurata');
            return NextResponse.json({
                success: false,
                message: 'Errore di configurazione del server.'
            }, { status: 500 });
        }

        const { error } = await resend.emails.send({
            from: 'Pandora <no-reply@associazionepandora.it>',
            to: [process.env.CONTACT_EMAIL || 'aureliopetrone@gmail.com'], // Fallback email
            subject: `Nuovo messaggio da ${name}`,
            replyTo: email,
            html: `
                <h2>Nuovo messaggio dal form contatti</h2>
                <p><strong>Nome:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Messaggio:</strong></p>
                <p>${message}</p>
            `,
        });

        if (error) {
            console.error('Errore Resend dettagliato:', JSON.stringify(error, null, 2));
            return NextResponse.json({
                success: false,
                message: `Errore nell'invio del messaggio: ${error.message || 'Errore del servizio email'}`
            }, { status: 400 });
        }

        return NextResponse.json({
            success: true,
            message: 'Messaggio inviato con successo! Ti ricontatteremo presto.'
        });
    } catch (error) {
        console.error('Errore generico API contact:', error);
        return NextResponse.json({
            success: false,
            message: 'Si è verificato un errore durante l\'invio del messaggio.'
        }, { status: 500 });
    }
}
