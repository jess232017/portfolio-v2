"use client";

import type { FC } from "react";
import React, { useRef, useMemo, useState, Fragment } from "react";
import { motion, useInView } from "motion/react";
import { useTranslations, useLocale } from "next-intl";

import { api } from "@/trpc/react";
import { LIMIT_PER_PAGE } from "@/utils/constants";
import HeaderArticle from "@/components/shared/header-article";

import FilterType from "./FilterType";
import PortfolioItem from "./ProjectItem";

const type = [undefined, "FRONTEND", "BACKEND", "MOBILE", "DESKTOP"] as const;

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const limit = LIMIT_PER_PAGE;

const Portfolio: FC = ({}) => {
  const locale = useLocale();
  const ref = useRef(null);

  const t = useTranslations("main.portfolio");

  const isInView = useInView(ref, { once: true });
  const labels = useMemo(
    () => ({
      urlName: t("actions.view"),
      sourceName: t("actions.source"),
      privateName: t("private.title"),
      privateDescription: t("private.description"),
      canSeeDemo: t("private.canSeeDemo"),
    }),
    [t],
  );

  const [crtValue, setCrtValue] = useState<number>(0);
  const { data, isFetching, isLoading, fetchNextPage } =
    api.portfolio.getProjects.useInfiniteQuery(
      { limit, locale, type: type[crtValue] },
      {
        getNextPageParam: (info) => info.cursor,
      },
    );

  const handleFetchMore = () => {
    void fetchNextPage();
  };

  return (
    <div className="overflow-hidden">
      <section
        id="portfolio"
        className="mx-auto px-4 pb-4 lg:container lg:px-20 lg:pb-20"
      >
        <HeaderArticle
          title={t("title")}
          description={t("description")}
          subtitle={t("subtitle")}
        />
        <FilterType value={crtValue} onChange={setCrtValue} />
        <section ref={ref}>
          <motion.ul
            initial="hidden"
            variants={container}
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
          >
            {data?.pages.map((page, idx) => (
              <Fragment key={page.cursor ?? idx}>
                {page.data.map((project) => (
                  <motion.li
                    layout
                    key={project.id}
                    className="flex justify-center"
                    variants={item}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  >
                    <PortfolioItem {...project} {...labels} />
                  </motion.li>
                ))}
              </Fragment>
            ))}
          </motion.ul>

          <div className="mt-8 flex flex-col items-center justify-center gap-4">
            {isLoading ? (
              <div className="border-primary-900 h-10 w-10 animate-spin rounded-full border border-b-2" />
            ) : null}

            {data?.pages[data.pages.length - 1].hasMore ? (
              <button
                type="button"
                onClick={handleFetchMore}
                disabled={isFetching ?? isLoading}
                className="bg-primary-500 pressable text-secondaryText-50 hover:bg-primary-700 rounded-sm px-4 py-2 font-bold"
              >
                {isFetching
                  ? t("pagination.loading")
                  : t("pagination.loadMore")}
              </button>
            ) : null}
          </div>
        </section>
      </section>
    </div>
  );
};

export default Portfolio;
