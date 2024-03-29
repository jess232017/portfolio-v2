import React, { useCallback } from "react";
import type { FC, ReactNode } from "react";
import { useTranslations } from "next-intl";

import { ClientLocalLibraryIcon } from "./ClientIcon";

interface IadditionalInformationProps {}

const AdditionalInformation: FC<IadditionalInformationProps> = () => {
  const t = useTranslations("curriculum");

  const renderItems = useCallback(
    (chunks: ReactNode) => <li className="">{chunks}.</li>,
    [t],
  );

  return (
    <>
      <h5 className="text-blue mb-1 flex items-center gap-1 text-lg font-semibold uppercase tracking-tight text-cv">
        <ClientLocalLibraryIcon />
        {t("header.additionalInformation")}
      </h5>
      <div className="mb-4">
        <ul className="list-disc pl-8 text-xs">
          {t.rich("additionalInformation", {
            item: renderItems,
          })}
        </ul>
      </div>
    </>
  );
};

export default AdditionalInformation;
