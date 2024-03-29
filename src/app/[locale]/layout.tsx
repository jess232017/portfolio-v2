import type { ReactNode } from "react";
import clsx from "clsx";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";

import TrpcProvider from "@/hoc/TrpcProvider";
import PreloadTheme from "@/hoc/PreloadTheme";
import ThemeContextProvider from "@/hoc/ThemeContextProvider";
import { locales } from "@/config";
import { getMessages } from "@/i18n";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "main" });

  return {
    title: t("meta.title"),
    description: t("meta.description"),
    keywords: t("meta.keywords"),
    manifest: "/manifest.json",
    metadataBase: new URL("https://www.jesushg.com"),
    alternates: {
      canonical: "/",
      languages: {
        es: "https://www.jesushg.com/es",
        en: "https://www.jesushg.com/en",
        nl: "https://www.jesushg.com/nl",
        "en-US": "https://www.jesushg.com/en",
        "es-ES": "https://www.jesushg.com/es",
      },
    },
    icons: [
      {
        url: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/icon-256x256.png",
        sizes: "256x256",
        type: "image/png",
      },
      {
        url: "/icon-384x384.png",
        sizes: "384x384",
        type: "image/png",
      },
      {
        url: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        url: "/icon-512x512-maskable.png",
        sizes: "512x512",
        type: "image/png",
        // purpose: 'maskable',
      },
    ],
    openGraph: {
      title: t("meta.title"),
      description: t("meta.description"),
      url: "https://www.jesushg.com",
      type: "website",
      images: [
        {
          url: "https://res.cloudinary.com/js-media/image/upload/v1690307602/portfolio/portfolio-v2_kxkpvh.webp",
          width: 800,
          height: 600,
          alt: "A picture of my personal website",
        },
      ],
    },
    twitter: {
      site: "@jesus_hg",
      title: t("meta.title"),
      description: t("meta.description"),
      images: [
        {
          url: "https://res.cloudinary.com/js-media/image/upload/v1690307602/portfolio/portfolio-v2_kxkpvh.webp",
          width: 800,
          height: 600,
          alt: "A picture of my personal website",
        },
      ],
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  // Get the messages for the locale
  const messages = await getMessages(locale);

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return (
    <html className="h-full" lang={locale}>
      <PreloadTheme />
      <body
        className={clsx(
          inter.className,
          "flex min-h-screen flex-col justify-between overflow-x-hidden scroll-smooth bg-background-200",
        )}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <TrpcProvider>
            <ThemeContextProvider>{children}</ThemeContextProvider>
          </TrpcProvider>
        </NextIntlClientProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
