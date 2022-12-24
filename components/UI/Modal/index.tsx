import React, { useEffect } from 'react';

import { motion } from 'framer-motion';
import { RiCloseCircleFill } from 'react-icons/ri';

interface IModalProps {
  className?: string;
  children?: React.ReactNode;
  onClickBackdrop?: () => void;
}

const Modal: React.FC<IModalProps> = ({ children, onClickBackdrop, className }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <div
        role="button"
        tabIndex={-1}
        className="absolute inset-0 bg-gray-900 opacity-60"
        onClick={onClickBackdrop}
        onKeyUp={onClickBackdrop}
      />
      <div
        className={
          'selection: z-50 h-full max-h-screen w-full overflow-y-auto border border-gray-100 bg-white shadow-lg md:h-auto md:w-3/5 md:rounded-lg lg:w-2/5' +
          className
        }>
        {children}
      </div>
    </motion.div>
  );
};

interface ICloseModalProps {
  onClick?: () => void;
  className?: string;
  classIcon?: string;
  title: string;
}

const CloseModal: React.FC<ICloseModalProps> = ({ onClick, className, classIcon, title }) => {
  return (
    <motion.button
      title={title}
      aria-label={title}
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      className={'pressable absolute top-3 right-3 p-2 text-gray-500 ' + className}>
      <RiCloseCircleFill className={'h-7 w-7 ' + classIcon} />
    </motion.button>
  );
};

export { CloseModal };
export default Modal;
