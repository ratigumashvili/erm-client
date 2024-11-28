import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

import { firaGo, bpg } from './_lib/fonts';
import "./globals.css";

import Header from './_components/header';
import Footer from './_components/footer';

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function LocaleLayout({ children, params }) {

  const { locale } = await params

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${firaGo.variable} ${bpg.variable} font-firaGo font-light antialiased flex flex-col over`}>
        <NextIntlClientProvider messages={messages}>
          <Header locale={locale} />
          <main className="container py-8">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
