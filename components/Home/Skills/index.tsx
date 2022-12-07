import React, { FC, useRef } from 'react';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';

import SkillItem from '../SkillItem';
import { ISkill } from '../../../utils/interfaces/portfolio';

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

interface ISkillsProps {
  skills: ISkill[];
}

const Skills: FC<ISkillsProps> = ({ skills }) => {
  const ref = useRef(null);

  const t = useTranslations('skills');
  const isInView = useInView(ref, { once: true });

  return (
    <main className="mx-auto px-4 py-4 lg:container lg:px-20 lg:py-20">
      <h2 className="flex items-center justify-center border-b border-gray-200 py-6 font-bold text-blue-600 lg:justify-between">
        {t('title')}
      </h2>
      <section className="mt-8" ref={ref}>
        <motion.ul
          initial="hidden"
          variants={container}
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill) => (
            <motion.li variants={item} key={skill.id} className="flex">
              <SkillItem {...skill} />
            </motion.li>
          ))}
        </motion.ul>
      </section>
    </main>
  );
};

export default Skills;
