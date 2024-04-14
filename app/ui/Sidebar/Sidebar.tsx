"use client";

import { Flex, IconButton, ScrollArea } from "@radix-ui/themes";
import styles from "./Sidebar.module.scss";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { ComponentProps, useCallback } from "react";
import { useSidebar } from "./useSidebar";
import { Menu } from "./Menu";

type Props = {
  items: ComponentProps<typeof Menu>["items"];
};

export const Sidebar: React.FC<Props> = ({ items }) => {
  const { collapsed, toggle } = useSidebar();

  const handleElasticSidebarClick = useCallback(() => {
    toggle();
  }, []);

  return (
    <aside className={styles.sidebar} data-collapsed={collapsed}>
      <nav className={styles.nav}>
        <ScrollArea>
          <Menu items={items} />
        </ScrollArea>
      </nav>
      <IconButton
        aria-label={collapsed ? "Open sidebar" : "Close sidebar"}
        onClick={handleElasticSidebarClick}
        variant="solid"
        size="1"
        radius="large"
        className={styles.toggleButton}
        data-collapsed={collapsed}
      >
        <ChevronLeftIcon width="18" height="18" />
      </IconButton>
    </aside>
  );
};
