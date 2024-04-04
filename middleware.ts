import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname === '/gallery/AprilFool' || pathname === '/gallery/Shuko') {
    return NextResponse.redirect(new URL('/gallery', req.nextUrl));
  }

  if (pathname === '/events/WaktyHallDoor') {
    return NextResponse.redirect(new URL('/events', req.nextUrl));
  }
}

export const config = {
  matcher: ['/', '/gallery/:path*', '/events/:path*'],
};
