"use client";
import { Flex, IconButton, ScrollArea } from "@radix-ui/themes";
import styles from "./Sidebar.module.scss";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { ComponentProps, useCallback } from "react";
import { useToggle } from "@/app/hooks";

import { Menu } from "./Menu";

type Props = {
  items: ComponentProps<typeof Menu>["items"];
};

export const Sidebar: React.FC<Props> = ({ items }) => {
  const [collapsed, toggle] = useToggle(false);

  const handleElasticSidebarClick = useCallback(() => {
    toggle();
  }, []);

  return (
    <aside className={styles.sidebar} data-collapsed={collapsed}>
      <Flex align="center" justify="end" p="2" className={styles.controller}>
        <IconButton
          onClick={handleElasticSidebarClick}
          variant="ghost"
          radius="full"
          className={styles.toggleButton}
        >
          <ChevronLeftIcon width="18" height="18" />
        </IconButton>
      </Flex>
      <nav className={styles.nav}>
        <ScrollArea>
          <Menu items={items} />
        </ScrollArea>
      </nav>
    </aside>
  );
};
