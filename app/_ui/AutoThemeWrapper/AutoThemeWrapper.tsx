"use client";

import { PropsWithChildren } from "react";
import { Theme, ThemePanel } from "@radix-ui/themes";
import { ThemeProvider } from "next-themes";

export const AutoThemeWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <Theme accentColor="mint" grayColor="olive" panelBackground="solid">
        {children}
        <ThemePanel />
      </Theme>
    </ThemeProvider>
  );
};
