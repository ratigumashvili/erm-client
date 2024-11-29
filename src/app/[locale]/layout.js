import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

import { firaGo, bpg } from './_lib/fonts';
import { getSinglePage } from './_lib/apiCalls';
import "./globals.css";

import Header from './_components/header';
import Footer from './_components/footer';

export async function generateMetadata({ params }) {

  const { locale } = await params

  const { data } = await getSinglePage('home', locale, 'populate[seo][populate][metaImage][fields][0]=url')

  return {
    title: data?.seo?.metaTitle,
    description: data?.seo?.metaDescription,
    keywords: data?.seo?.metaKeywords,
    openGraph: {
      images: data?.seo?.metaImage?.url
    },
    icons: {
      icon: './favicon.ico',
    },
  }

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
