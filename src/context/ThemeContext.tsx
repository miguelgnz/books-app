"use client";

import { createContext, useContext, useState } from "react";

const ctx = {
  theme: "light",
  handleChangeTheme: (themeOption: string) => {},
};

export const ThemeContext = createContext(ctx);

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useState<string>("light");

  const handleChangeTheme = (themeOption: string) => {
    setTheme(themeOption);
  };

  const value = { theme, handleChangeTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
