"use client";

import React, { useState, useEffect, useMemo, startTransition } from "react";
import type { FC } from "react";
import Image from "next/image";
import { Rnd } from "react-rnd";

import { useDesktopContext } from "@/hoc/DesktopContextProvider";
import { useWindowContext } from "@/hoc/WindowContext";
import type { IPosition, ISize, WindowState } from "@/hoc/WindowContext";

interface IWindowDndProps {
  id: string;
  size: ISize;
  icon: string;
  title: string;
  position: IPosition;
  children: React.ReactNode;
  isMinimized: boolean;
  isMaximized: boolean;
  isFocused: boolean;
}

const WindowDnd: FC<IWindowDndProps> = ({
  id,
  size,
  icon,
  title,
  position,
  children,
  isMinimized,
  isFocused,
  isMaximized,
}) => {
  const { sizeScreen } = useDesktopContext();
  const {
    toggleMaximizeWindow,
    toggleMinimizeWindow,
    bringToFront,
    destroyWindow,
  } = useWindowContext();

  const [crtSize, setCrtSize] = useState<ISize>(size);
  const [crtPosition, setCrtPosition] = useState<IPosition>(position);

  const onDragStop = (e: any, d: any) => {
    setCrtPosition({ x: d.x, y: d.y });
  };

  const onResizeStop = (
    e: any,
    direction: any,
    ref: any,
    delta: any,
    newPosition: IPosition,
  ) => {
    setCrtSize({ width: ref.style.width, height: ref.style.height });
    setCrtPosition(newPosition);
  };

  /* const stopPropagation = (e: any) => {
    e.stopPropagation();
    bringToFront(id);
  }; */

  useEffect(() => {
    const newSize = isMaximized ? sizeScreen : size;
    const newPosition = isMaximized ? { x: 0, y: 0 } : position;

    startTransition(() => {
      setCrtSize(newSize);
      setCrtPosition(newPosition);
    });
  }, [isMaximized]);

  if (isMinimized) {
    return null;
  }

  return (
    <Rnd
      size={crtSize}
      position={crtPosition}
      onDragStop={onDragStop}
      onResizeStop={onResizeStop}
      onClick={() => bringToFront(id)}
      style={{ zIndex: isFocused ? 99999 : 1 }}
      className="border border-gray-500 bg-gray-800 p-0.5 shadow-lg"
    >
      <div className="flex h-full w-full cursor-pointer flex-col bg-background-200">
        <header className="flex items-center justify-between">
          <div className="flex p-2">
            <Image src={icon} alt="icon" width={16} height={16} />
          </div>
          <h1 className="flex-grow text-xs text-primaryText-500">{title}</h1>
          <div className="flex space-x-2">
            <button
              type="button"
              aria-label="Minimize window"
              onClick={() => toggleMinimizeWindow(id)}
              className="px-5 py-3 duration-100 hover:bg-background-500 hover:bg-opacity-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 10 1"
                className="h-2 w-2 fill-current text-primaryText-500"
              >
                <path d="M10 -0.000976562V1H0V-0.000976562H10Z" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Maximize window"
              onClick={() => toggleMaximizeWindow(id)}
              className="px-5 py-3 duration-100 hover:bg-background-500 hover:bg-opacity-10"
            >
              {isMaximized ? (
                <svg
                  data-v-7a68f144=""
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 10 10"
                  className="h-2 w-2 fill-current text-primaryText-500"
                >
                  <path
                    data-v-7a68f144=""
                    d="M10 7.99805H7.99805V10H0V2.00195H2.00195V0H10V7.99805ZM7.00195
              2.99805H1.00098V8.99902H7.00195V2.99805ZM8.99902
              1.00098H2.99805V2.00195H7.99805V7.00195H8.99902V1.00098Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 10 10"
                  className="h-2 w-2 fill-current text-primaryText-500"
                >
                  <path d="M0,0v10h10V0H0z M9,9H1V1h8V9z" />
                </svg>
              )}
            </button>
            <button
              type="button"
              aria-label="Close window"
              onClick={() => destroyWindow(id)}
              className="px-5 py-3 duration-100 hover:bg-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 10.2 10.2"
                className="h-2 w-2 fill-current text-primaryText-500 hover:text-white"
              >
                <path
                  d="M10.2,0.7 9.5,0 5.1,4.4 0.7,0 0,0.7 4.4,5.1 0,9.5 0.7,10.2
                          5.1,5.8 9.5,10.2 10.2,9.5 5.8,5.1"
                />
              </svg>
            </button>
          </div>
        </header>
        <main className="relative flex flex-1 select-none flex-col overflow-hidden">
          <div className="absolute inset-0 flex-1 overflow-auto">
            {children}
          </div>
        </main>
      </div>
    </Rnd>
  );
};

const WindowWrapper = React.memo(({ window }: { window: WindowState }) => {
  const MemoizedComponent = useMemo(() => window.component, [window.component]);

  return (
    <WindowDnd key={window.id} {...window}>
      <MemoizedComponent />
    </WindowDnd>
  );
});

export const Windows = () => {
  const windowsContext = useWindowContext();

  return (
    <>
      {windowsContext.windows.map((window) => (
        <WindowWrapper key={window.id} window={window} />
      ))}
    </>
  );
};

export default WindowDnd;
