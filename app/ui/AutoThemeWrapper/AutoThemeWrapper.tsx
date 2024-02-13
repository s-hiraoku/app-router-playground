"use client";
import { PropsWithChildren } from "react";
import { Theme, ThemePanel } from "@radix-ui/themes";
import { Inter } from "next/font/google";
import { isDarkModeAtom } from "@/app/store";
import { useAtomValue } from "jotai";

const inter = Inter({ subsets: ["latin"] });

type Props = {};

export const AutoThemeWrapper: React.FC<PropsWithChildren<Props>> = ({
  children,
}) => {
  const appearance = useAtomValue(isDarkModeAtom);
  return (
    <Theme
      appearance={appearance ? "dark" : "light"}
      accentColor="mint"
      grayColor="olive"
      panelBackground="solid"
    >
      {children}
      {/* <ThemePanel /> */}
    </Theme>
  );
};
