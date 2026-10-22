import { NextRequest, NextResponse } from 'next/server';
import { browserLocale, isLocale, LANGUAGE_COOKIE } from '@/lib/language-preference';

// The neutral entry negotiates language; all content URLs stay stable.
export function middleware(request: NextRequest) {
  const bypass = !['GET','HEAD'].includes(request.method) || request.headers.has('next-router-prefetch') || /prefetch/i.test(request.headers.get('purpose') || '');
  const saved = request.cookies.get(LANGUAGE_COOKIE)?.value;
  const languages = request.headers.get('accept-language');
  const hasPreference = !!languages?.trim() && languages.trim() !== '*';
  const locale = isLocale(saved) ? saved : hasPreference ? browserLocale(languages) : null;
  let response: NextResponse;
  if (bypass || !locale) response = NextResponse.next();
  else {
    const target = request.nextUrl.clone();
    target.pathname = locale === 'sl' ? '/sl' : `/${locale}`;
    response = NextResponse.redirect(target, 307);
  }
  response.headers.set('Cache-Control','private, no-store');
  response.headers.set('Vary','Accept-Language, Cookie');
  return response;
}
export const config = { matcher: '/' };
