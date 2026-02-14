import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  locales: ['en', 'pt'],
  defaultLocale: 'en'
});
 
export const config = {
  // Ignora arquivos internos e estáticos
  matcher: ['/', '/(pt|en)/:path*']
};