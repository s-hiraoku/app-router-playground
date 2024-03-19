"use client";

import styles from "./AuthenticatedLayout.module.scss";
import { Sidebar } from "@/app/ui/Sidebar";
import { Header } from "@/app/ui/Header";
import { PropsWithChildren } from "react";
import { Flex } from "@radix-ui/themes";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "@/app/ui/ErrorFallback";
import { SidebarProvider } from "../Sidebar/SidebarProvider";

export const AuthenticatedLayout: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  return (
    <div className={styles.container}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <SidebarProvider>
          <Sidebar items={[]} />
        </SidebarProvider>
        <Flex direction="column" grow="1">
          // TODO: The user setting is tentative.
          <Header user={undefined} />
          <main className={styles.mainContent}>{children}</main>
        </Flex>
      </ErrorBoundary>
    </div>
  );
};
