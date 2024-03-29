import React from "react";
import type { FC } from "react";
import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import {
  unstable_setRequestLocale as UnstableSetRequestLocale,
  getTranslations,
} from "next-intl/server";
import { FaDownload, FaHome } from "react-icons/fa";

import { locales } from "@/config";
import Layout from "@/components/Layout";
import CurriculumVitae from "@/components/CurriculumVitae";
import { Link } from "@/navigation";

interface ICvPageProps {
  params: { locale: string };
}

const CvPage: FC<ICvPageProps> = ({ params }) => {
  // Enable static rendering
  UnstableSetRequestLocale(params.locale);

  const t = useTranslations("curriculum");

  return (
    <Layout headerAlwaysVisible>
      <div className="mx-auto max-w-3xl">
        <div className="-mt-2 pt-24 print:hidden">
          <div className="md:max-w-letter mx-4 flex justify-between gap-2 md:mx-0">
            <Link
              href="/"
              className="pressable flex items-center gap-2 rounded-lg border border-primary-700 px-4 py-3 text-sm text-primary-700 shadow-lg hover:bg-primary-800 hover:text-secondaryText-100"
            >
              {t("actions.goBack")} <FaHome className="text-xs" />
            </Link>

            <a
              href={t("downloadLink")}
              download="CV - Jesús Enmanuel Hernández González.pdf"
              className="pressable flex items-center gap-2 rounded-lg bg-primary-700 px-4 py-3 text-sm text-secondaryText-100 shadow-lg hover:bg-primary-800"
            >
              {t("actions.download")} <FaDownload className="text-xs" />
            </a>
          </div>
        </div>
        <section className="page print:max-w-letter print:max-h-letter print:my-o lg:h-letter md:max-w-letter md:h-letter my-6 mb-0 overflow-hidden bg-gray-100 sm:mb-6 print:mx-0 print:border-0 print:bg-white">
          <div style={{ opacity: 1 }} className="bg-white text-black">
            <CurriculumVitae />
            <div className="bg-cv p-4">
              <p className="text-xs font-semibold text-white">
                {t("codedWith")}
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export async function generateMetadata({
  params: { locale },
}: Omit<ICvPageProps, "children">): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "curriculum" });

  return {
    title: t("title"),
    description: t("aboutMe"),
    manifest: "/manifest.json",
    metadataBase: new URL("https://www.jesushg.com"),
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default CvPage;
