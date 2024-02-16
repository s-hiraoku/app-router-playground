"use client";

import styles from "./DefaultLayout.module.scss";
import { Sidebar } from "@/app/ui/Sidebar";
import { Header } from "@/app/ui/Header";
import { PropsWithChildren } from "react";
import { Flex } from "@radix-ui/themes";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "@/app/ui/ErrorFallback";

export const DefaultLayout: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  return (
    <div className={styles.container}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Sidebar items={[]} />
        <Flex className={styles.wrapper}>
          <Header />
          <main className={styles.mainContent}>{children}</main>
        </Flex>
      </ErrorBoundary>
    </div>
  );
};
