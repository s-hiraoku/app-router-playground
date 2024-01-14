"use client";
import { useMediaQuery } from "@/app/hooks";
import { Theme } from "@radix-ui/themes";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

type Props = { children: React.ReactNode };

export const AutoThemeWrapper: React.FC<Props> = ({ children }) => {
  const appearance = useMediaQuery("(prefers-color-scheme: dark)")
    ? "dark"
    : "light";
  return <Theme appearance={appearance}>{children}</Theme>;
};
