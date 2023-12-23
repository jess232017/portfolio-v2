import React, { FC } from 'react';

import { useTranslations } from 'next-intl';

import { MdOutlineSecurity } from 'react-icons/md';
import { HiOutlineUserGroup, HiOutlineEye } from 'react-icons/hi';
import { HiOutlineDesktopComputer, HiOutlineDatabase } from 'react-icons/hi';

import { typeSKills } from '@/config';
import { useRouter } from '@/navigation';

import Tab, { TabItem } from '@/components/UI/Tab';

interface IFilterTypeProps {
  value: number;
  onChange: (value: number) => void;
}


const FilterType: FC<IFilterTypeProps> = ({ value }) => {
  const t = useTranslations('certification');

  const { push } = useRouter();

  //change current page when change tab
  const onChangeTab = (value: number) => {
    push(`/certificates/${typeSKills[value]}`);
  };

  return (
    <div className="flex justify-center items-center w-full mb-14">
      <Tab
        minimal
        currentTab={value}
        setCurrentTab={onChangeTab}
        className="flex gap-4 items-center overflow-x-auto z-20">
        <TabItem icon={HiOutlineEye} title={t('types.all.title')} description={t('types.all.subtitle')} />
        <TabItem
          icon={HiOutlineDesktopComputer}
          title={t('types.frontend.title')}
          description={t('types.frontend.subtitle')}
        />
        <TabItem icon={HiOutlineDatabase} title={t('types.backend.title')} description={t('types.backend.subtitle')} />
        {/**<TabItem icon={HiOutlineDeviceMobile} title={t('types.mobile.title')} description={t('types.mobile.subtitle')} /> */}
        <TabItem
          icon={MdOutlineSecurity}
          title={t('types.cybersecurity.title')}
          description={t('types.cybersecurity.subtitle')}
        />
        <TabItem
          icon={HiOutlineUserGroup}
          title={t('types.softskills.title')}
          description={t('types.softskills.subtitle')}
        />
      </Tab>
    </div>
  );
};

export default FilterType;
