import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        // Here you would typically send an email or save to a database
        console.log('Nuovo messaggio ricevuto:', { name, email, message });

        // Simulate some processing delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        return NextResponse.json({
            success: true,
            message: 'Messaggio inviato con successo! Ti ricontatteremo presto.'
        });
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: 'Si è verificato un errore durante l\'invio del messaggio.'
        }, { status: 500 });
    }
}
