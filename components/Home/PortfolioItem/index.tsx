import React, { FC } from 'react';

import Image, { ImageLoaderProps } from 'next/image';

import { AiFillGithub, AiFillEye } from 'react-icons/ai';

interface IPortfolioItemProps {
  image: string;
  title: string;
  description: string;
  made_with: string[];
  type: string;
  url_web: string;
  url_github: string;
  is_private?: boolean;
  urlName: string;
  sourceName: string;
  privateName: string;
  privateDescription: string;
}

const cloudinaryLoader = ({ width, src, quality }: ImageLoaderProps) => {
  const qualityString = quality ? ',q_' + quality : '';
  return `https://res.cloudinary.com/js-media/image/upload/w_${width}${qualityString},c_limit/v1642524352/portfolio/${src}`;
};

const siLoader = ({ src }: ImageLoaderProps) => {
  return `https://cdn.simpleicons.org/${src}`;
};

const PortfolioItem: FC<IPortfolioItemProps> = ({
  image,
  title,
  description,
  url_web,
  url_github,
  made_with,
  type,
  is_private = false,
  urlName,
  sourceName,
  privateName,
  privateDescription,
}) => {
  return (
    <div className="group relative h-60 max-w-sm overflow-hidden rounded border-t border-gray-50 bg-white	shadow-lg">
      <Image src={image} loader={cloudinaryLoader} alt="Portfolio Image" width={400} height={200} />
      <div className="absolute inset-x-0 bottom-0 bg-gray-100 p-4 text-gray-700">
        <p className="mb-1 text-sm font-semibold">{title}</p>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
      <div className="absolute inset-0 isolate z-20 flex flex-col bg-gray-900 bg-opacity-90 opacity-0 transition-opacity group-hover:opacity-100">
        <div className="flex grow flex-col items-center justify-center gap-4 px-4 ">
          <a href={url_web} target="_blank" rel="noreferrer" className="rounded-md bg-red-500 px-4 py-2  shadow-lg">
            <span className="flex items-center justify-center gap-2 text-xs text-white">
              <AiFillEye className="h-4 w-4" />
              {urlName}
            </span>
          </a>
          {!is_private && (
            <a href={url_github} target="_blank" rel="noreferrer" className="rounded-md bg-black px-4 py-2 shadow-lg">
              <span className="flex items-center justify-center gap-2 text-xs text-white">
                <AiFillGithub className="h-4 w-4" />
                {sourceName}
              </span>
            </a>
          )}
        </div>
        <div className="flex w-full items-center gap-4 overflow-x-auto bg-gray-100 py-5 px-4 text-gray-700">
          {made_with?.map((tech) => (
            <div key={tech} className="flex flex-col items-center gap-2">
              <Image src={tech} loader={siLoader} alt={tech} width={20} height={20} />
              <span className="text-xs capitalize">{tech}</span>
            </div>
          ))}
        </div>
      </div>
      {is_private && (
        <span
          title={privateDescription}
          className="whitespace-no-wrap absolute top-0 right-0 z-30 origin-bottom-left -translate-y-full translate-x-1/3 rotate-45 transform bg-blue-600 px-5 py-1 text-center text-xs uppercase tracking-wider text-white shadow-lg">
          {privateName}
        </span>
      )}
    </div>
  );
};

export default PortfolioItem;
