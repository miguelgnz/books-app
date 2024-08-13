"use client";
import { useThemeContext } from "@/context/ThemeContext";

export default function HomePageBody({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useThemeContext();

  return (
    <body
      style={{
        backgroundColor: `${theme === "light" ? "#FFFF" : "#34276b"}`,
        height: "100vh",
      }}
    >
      {children}
    </body>
  );
}
