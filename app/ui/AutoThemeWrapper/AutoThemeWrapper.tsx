"use client";
import { PropsWithChildren } from "react";
import { useMediaQuery } from "@/app/hooks";
import { Theme } from "@radix-ui/themes";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

type Props = {};

export const AutoThemeWrapper: React.FC<PropsWithChildren<Props>> = ({
  children,
}) => {
  const appearance = useMediaQuery("(prefers-color-scheme: dark)")
    ? "dark"
    : "light";
  return <Theme appearance={appearance}>{children}</Theme>;
};
