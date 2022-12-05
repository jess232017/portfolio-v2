import React, { FC } from 'react';

interface ITerminalProps {
  children: React.ReactNode;
}

const Terminal: FC<ITerminalProps> = ({ children }) => {
  return (
    <div className="w-full overflow-x-auto rounded-lg bg-gray-900 text-white shadow-xl">
      <div className="border-b border-gray-800 py-2 px-4">
        <div className="mr-2 inline-block h-3 w-3 rounded-full bg-red-500" />
        <div className="mr-2 inline-block h-3 w-3 rounded-full bg-yellow-300" />
        <div className="mr-2 inline-block h-3 w-3 rounded-full bg-green-400" />
      </div>
      <div className="text-md whitespace-pre px-8 py-2">{children}</div>
    </div>
  );
};

export default Terminal;
