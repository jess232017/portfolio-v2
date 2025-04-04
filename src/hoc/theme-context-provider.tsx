"use client";

import type { FC } from "react";
import React, {
  useState,
  useMemo,
  useEffect,
  createContext,
  startTransition,
} from "react";

import { ETheme } from "@/utils/constants/theme";

export type ThemeType = ETheme;

export interface ITheme {
  theme: ThemeType;
  isDark: boolean;
}

interface IThemeContext extends ITheme {
  setTheme: (theme: ThemeType, isDark: boolean) => void;
}

// Create context with default theme
const ThemeContext = createContext<IThemeContext>({
  isDark: false,
  theme: ETheme.MAIN_LIGHT,
  setTheme: () => {
    console.warn("setTheme is called outside of a ThemeContextProvider.");
  },
});

// Provider component that wraps app and makes theme object available

interface IThemeContextProviderProps {
  children: React.ReactNode;
}

const ThemeContextProvider: FC<IThemeContextProviderProps> = ({ children }) => {
  const [theme, setRawTheme] = useState<ITheme>({
    theme: ETheme.MAIN_LIGHT,
    isDark: false,
  });

  const setTheme = (newTheme: ThemeType, isDark: boolean) => {
    const root = document.documentElement;
    const colorMode = isDark ? "dark" : "light";

    root.removeAttribute("class");
    setRawTheme({ theme: newTheme, isDark });
    root.classList.add(`theme-${newTheme}`);
    window.localStorage.setItem("theme", newTheme);
    window.localStorage.setItem("color-mode", colorMode);

    root.setAttribute("data-theme", newTheme);
    root.setAttribute("data-color-mode", isDark ? "dark" : "light");
  };

  // this get the initial theme from local storage and set it to the state
  useEffect(() => {
    const initialTheme = window.localStorage.getItem("theme") as ThemeType;
    const initialColorMode = window.localStorage.getItem("color-mode");
    startTransition(() => {
      setTheme(initialTheme ?? "main-light", initialColorMode === "dark");
      setRawTheme({
        theme: initialTheme ?? "main-light",
        isDark: initialColorMode === "dark",
      });
    });
  }, []);

  // useMemo to memoize the context value
  const contextValue = useMemo(() => ({ ...theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook that shorthands the context!

const useThemeContext = () => {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error(
      "useThemeContext must be used within a ThemeContextProvider",
    );
  }
  return context;
};

export { useThemeContext };
export default ThemeContextProvider;
