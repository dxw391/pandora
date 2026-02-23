import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';
import { getCanonicalUrl } from '@/lib/utils/url';

export async function GET(request: Request) {
    const requestUrl = new URL(request.url);
    const code = requestUrl.searchParams.get('code');

    if (code) {
        const supabase = await createClient();
        await supabase.auth.exchangeCodeForSession(code);
    }

    // Redirect to home page after successful authentication
    return NextResponse.redirect(getCanonicalUrl());
}
