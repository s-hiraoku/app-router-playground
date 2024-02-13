"use client";

import styles from "./DefaultLayout.module.scss";
import { Sidebar } from "@/app/ui/Sidebar";
import { Header } from "@/app/ui/Header";
import { PropsWithChildren } from "react";
import { Flex } from "@radix-ui/themes";

export const DefaultLayout: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  return (
    <div className={styles.container}>
      <Sidebar items={[]} />
      <Flex className={styles.wrapper}>
        <Header />
        <main className={styles.mainContent}>{children}</main>
      </Flex>
    </div>
  );
};
