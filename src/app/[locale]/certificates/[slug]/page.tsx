import React from "react";
import type { FC } from "react";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import Certification from "@/components/Certification";
import { stackTypes } from "@/utils/constants/certificatesType";

interface ICvPageProps {
  params: {
    locale: string;
    slug: (typeof stackTypes)[number];
  };
}

const CvPage: FC<ICvPageProps> = ({ params }) => {
  return <Certification slug={params.slug} />;
};

export async function generateMetadata({
  params: { locale },
}: Omit<ICvPageProps, "children">): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "certification" });

  return {
    title: t("title"),
    description: t("description"),
    manifest: "/manifest.json",
    metadataBase: new URL("https://www.jesushg.com"),
  };
}

export const generateStaticParams = () => {
  return stackTypes.map((type) => ({
    slug: type.toLowerCase(),
  }));
};

export default CvPage;
