import React, { FC } from 'react';

import { useTranslations } from 'next-intl';

import { HiOutlineUserGroup } from 'react-icons/hi';
import { HiOutlineDesktopComputer, HiOutlineDatabase } from 'react-icons/hi';

import Tab, { TabItem } from '@/components/UI/Tab';

interface IFilterTypeProps {
    value: number;
    onChange: (value: number) => void;
}

const FilterType: FC<IFilterTypeProps> = ({ value , onChange }) => {
  const t = useTranslations('main.skills');

  return (
    <div className='flex w-full items-center justify-center'>
      <Tab
        tabId='skills-tab'
        variant="secondary"
        currentTab={value}
        setCurrentTab={onChange}
        className="flex gap-4 mb-14 lg:mb-0 overflow-x-auto lg:flex-col lg:overflow-x-visible">
          <TabItem
            icon={HiOutlineDesktopComputer}
            title={t('tabs.frontend.title')}
            description={t('tabs.frontend.description')}
          />
          <TabItem 
            icon={HiOutlineDatabase} 
            title={t('tabs.backend.title')} 
            description={t('tabs.backend.description')}
          />
          <TabItem
            icon={HiOutlineUserGroup}
            title={t('tabs.tools.title')}
            description={t('tabs.tools.description')}
          />
      </Tab>
    </div>
  );
};

export default FilterType;