import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
    const session = await getToken({
        req,
        secret: process.env.SECRET,
        secureCookie:
            process.env.NEXTAUTH_URL?.startsWith('https://') ??
            !!process.env.VERCEL_URL,
    });

    if (!session) {
        return NextResponse.redirect(new URL('/auth/login', req.url));
    } else {
        return NextResponse.next();
    }
}

export const config = {
    matcher: ['/smc', '/user/:path*', '/gym/:path*', '/word/:path*'],
};
