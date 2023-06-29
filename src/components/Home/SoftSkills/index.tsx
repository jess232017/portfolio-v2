import React, { FC, useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

import { useTranslations } from 'next-intl';
import SoftSkillItem from './SoftSkillItem';

import { RiHandHeartLine, RiGpsLine, RiDashboard3Line } from 'react-icons/ri';
import { RiSettingsLine, RiTimerFlashLine, RiMapPinTimeLine, RiQuillPenLine } from 'react-icons/ri';
import { RiMedal2Line, RiTeamLine, RiCalendarTodoLine, RiShieldStarLine, RiEmotion2Line } from 'react-icons/ri';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface ISoftSkillsProps {}

const SoftSkills: FC<ISoftSkillsProps> = ({}) => {
  const t = useTranslations('main.soft-skills');

  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  return (
    <>
      <section className="hero relative flex h-[55vh] w-full flex-col items-center  overflow-hidden bg-black before:bg-hero-skills md:h-[65vh]">
        <h2 className="z-10  p-10 text-4xl font-bold text-slate-200">{t('title')}</h2>
        <div className=" mx-auto flex h-full w-full items-center justify-center gap-6 px-4 py-4 pt-0 text-secondaryText-50 lg:container lg:px-20 lg:py-20 lg:pt-5">
          <Swiper
            loop={true}
            slidesPerView={1}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              480: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
            modules={[Autoplay]}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}>
            <SwiperSlide className="text-center">
              <SoftSkillItem
                icon={RiTeamLine}
                title={t('skills.teamwork.title')}
                description={t('skills.teamwork.description')}
              />
            </SwiperSlide>
            {/* <SwiperSlide className="text-center"><SoftSkillItem
       icon={RiEmotion2Line}
       title={t('skills.communication.title')}
       description={t('skills.communication.description')}
     /></SwiperSlide>*/}
            <SwiperSlide className="text-center">
              <SoftSkillItem
                icon={RiShieldStarLine}
                title={t('skills.problemSolving.title')}
                description={t('skills.problemSolving.description')}
              />
            </SwiperSlide>
            <SwiperSlide className="text-center">
              <SoftSkillItem
                icon={RiMedal2Line}
                title={t('skills.goalOriented.title')}
                description={t('skills.goalOriented.description')}
              />
            </SwiperSlide>
            <SwiperSlide className="text-center">
              <SoftSkillItem
                icon={RiSettingsLine}
                title={t('skills.adaptability.title')}
                description={t('skills.adaptability.description')}
              />
            </SwiperSlide>
            <SwiperSlide className="text-center">
              <SoftSkillItem
                icon={RiTimerFlashLine}
                title={t('skills.timeManagement.title')}
                description={t('skills.timeManagement.description')}
              />
            </SwiperSlide>
            {/* <SwiperSlide className="text-center"><SoftSkillItem
       icon={RiQuillPenLine}
       title={t('skills.creativity.title')}
       description={t('skills.creativity.description')}
   /></SwiperSlide>*/}
            <SwiperSlide className="text-center">
              <SoftSkillItem
                icon={RiHandHeartLine}
                title={t('skills.leadership.title')}
                description={t('skills.leadership.description')}
              />
            </SwiperSlide>
            {/* <SwiperSlide className="text-center"><SoftSkillItem
       icon={RiCalendarTodoLine}
       title={t('skills.organization.title')}
       description={t('skills.organization.description')}
     /></SwiperSlide>*/}
            <SwiperSlide className="text-center">
              <SoftSkillItem
                icon={RiMapPinTimeLine}
                title={t('skills.responsibility.title')}
                description={t('skills.responsibility.description')}
              />
            </SwiperSlide>
            {/*
      <SwiperSlide className="text-center"><SoftSkillItem
       icon={RiGpsLine}
       title={t('skills.initiative.title')}
       description={t('skills.initiative.description')}
     />*/}
            <SwiperSlide className="text-center">
              <SoftSkillItem
                icon={RiDashboard3Line}
                title={t('skills.commitment.title')}
                description={t('skills.commitment.description')}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default SoftSkills;