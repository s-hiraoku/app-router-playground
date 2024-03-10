"use client";

import { PropsWithChildren } from "react";
import styles from "./GuestLayout.module.scss";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "@/app/ui/ErrorFallback";
import { Header } from "@/app/ui/Header";
import { Flex } from "@radix-ui/themes";

export const GuestLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.container}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Flex direction="column" grow="1">
          <Header />
          <main className={styles.mainContent}>{children}</main>
        </Flex>
      </ErrorBoundary>
    </div>
  );
};
