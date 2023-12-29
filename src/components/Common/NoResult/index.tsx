import React from 'react';
import { useTranslations } from 'next-intl';
import type { FC } from 'react';

import NoSvgAlt from './NoSvgAlt';

// types

interface INoResultProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

const NoResult: FC<INoResultProps> = ({ title, description, children }) => {
  const t = useTranslations('global.fallback.noResults');

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center">
      <div className="flex justify-center items-center flex-col relative flex-grow h-full w-full">
        <h1 className="my-2 text-primaryText-800 font-bold text-4xl">{title || t('title')}</h1>
        <p className="my-2 text-primaryText-800">{description || t('description')}</p>
        {children}
      </div>
      <NoSvgAlt />
    </div>
  );
};

export default NoResult;
