import clsx from 'clsx';
import { ReactNode } from 'react';

import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { createTranslator, NextIntlClientProvider } from 'next-intl';

import TrpcProvider from '@/hoc/TrpcProvider';
import PreloadTheme from '@/hoc/PreloadTheme';
import ThemeContextProvider from '@/hoc/ThemeContextProvider';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  children: ReactNode;
  params: { locale: string };
};

async function getMessages(locale: string) {
  try {
    return {
      ...(await import(`../../../messages/${locale}/main.json`)).default,
      ...(await import(`../../../messages/${locale}/global.json`)).default,
    };
  } catch (error) {
    notFound();
  }
}

export async function generateMetadata({ params: { locale } }: Props) {
  const messages = await getMessages(locale);

  // You can use the core (non-React) APIs when you have to use next-intl
  // outside of components. Potentially this will be simplified in the future
  // (see https://next-intl-docs.vercel.app/docs/next-13/server-components).
  const t = createTranslator({ locale, messages });

  return {
    title: t('main.title'),
  };
}

export default async function LocaleLayout({ children, params: { locale } }: Props) {
  const messages = await getMessages(locale);

  return (
    <html className="h-full" lang={locale}>
      <PreloadTheme />
      <body
        className={clsx(inter.className, 'flex min-h-screen flex-col justify-between scroll-smooth bg-background-200')}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <TrpcProvider>
            <ThemeContextProvider>{children}</ThemeContextProvider>
          </TrpcProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}