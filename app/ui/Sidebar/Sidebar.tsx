"use client";
import { Flex, IconButton, ScrollArea } from "@radix-ui/themes";
import styles from "./Sidebar.module.scss";
import classNames from "classnames";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { useCallback } from "react";
import { useToggle } from "@/app/hooks";

type Props = {};

export const Sidebar: React.FC<Props> = ({}) => {
  const [isOpen, toggle] = useToggle(false);

  const handleElasticSidebarClick = useCallback(() => {
    toggle();
  }, []);
  return (
    <aside className={classNames(styles.sidebar, { [styles.open]: isOpen })}>
      <Flex align="center" justify="end" p="2">
        <IconButton
          onClick={handleElasticSidebarClick}
          variant="ghost"
          radius="full"
        >
          <ChevronLeftIcon width="18" height="18" />
        </IconButton>
      </Flex>
      <nav>
        <ScrollArea>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Works</li>
            <li>Contact</li>
          </ul>
        </ScrollArea>
      </nav>
    </aside>
  );
};
