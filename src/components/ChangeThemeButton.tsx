"use client";

import { Button } from "@nextui-org/react";
import { useThemeContext } from "@/context/ThemeContext";

export default function ChangeThemeButton() {
  const { handleChangeTheme, theme } = useThemeContext();
  return (
    <Button
      onClick={() => {
        handleChangeTheme(theme === "light" ? "dark" : "light");
      }}
    >
      Change theme
    </Button>
  );
}
