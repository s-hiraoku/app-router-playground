"use client";
import { PropsWithChildren } from "react";
import { useDarkMode } from "@/app/hooks";
import { Theme, ThemePanel } from "@radix-ui/themes";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

type Props = {};

export const AutoThemeWrapper: React.FC<PropsWithChildren<Props>> = ({
  children,
}) => {
  const appearance = useDarkMode();
  return (
    <Theme
      appearance={appearance}
      accentColor="mint"
      grayColor="olive"
      panelBackground="solid"
    >
      {children}
      <ThemePanel />
    </Theme>
  );
};
