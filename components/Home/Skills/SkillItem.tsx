import React, { FC } from 'react';
import Image, { ImageLoaderProps } from 'next/image';

interface ISkillItemProps {
  image: string;
  title: string;
  description: string;
  onClick?: () => void;
}

const siLoader = ({ src }: ImageLoaderProps) => {
  return `https://cdn.simpleicons.org/${src}`;
};

const SkillItem: FC<ISkillItemProps> = ({ image, title, description, onClick }) => {
  /* border border-primary-50 bg-background-50/50 shadow backdrop-blur-xl hover:shadow-lg */
  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      className="group flex w-full flex-col items-center gap-4 rounded-lg p-4 shadow-sm transition-transform hover:scale-110 hover:transform hover:shadow-lg">
      <span className="relative block h-8 w-8 rounded-full bg-background-100">
        <Image width={32} height={32} src={image} alt={title} loader={siLoader} />
      </span>
      <span className="text-center text-xs font-bold leading-none text-secondaryText-700 group-hover:text-primary-700">
        {title}
      </span>
      <span className="hidden text-justify text-sm text-secondaryText-800">{description}</span>
    </button>
  );
};

export default SkillItem;