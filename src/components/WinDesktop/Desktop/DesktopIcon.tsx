import React from 'react';
import Image from 'next/image';

export interface IDesktopIcon {
  id: string | number;
  icon: string;
  title: string;
  onClick?: () => void;
}

const DesktopIcon: React.FC<IDesktopIcon> = ({ id, icon, title, onClick }) => {
  return (
    <button
      data-id={id}
      type="button"
      onClick={onClick}
      className="flex pressable hover:backdrop-blur hover:transition-colors w-full select-none duration-500 supports-backdrop-blur:bg-white/95 hover:bg-slate-900/75 p-2 flex-col items-center rounded text-xs text-white">
      <Image src={icon} alt={title} height={40} width={40} className="mb-2" />
      <span>{title}</span>
    </button>
  );
};

export default DesktopIcon;
