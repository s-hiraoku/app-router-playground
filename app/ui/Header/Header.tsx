"use client";
import styles from "./Header.module.scss";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Box, Button, Flex } from "@radix-ui/themes";
import { useCallback } from "react";

type Props = {};

export const Header: React.FC<Props> = ({}) => {
  return (
    <header className={styles.header}>
      <Flex align="center" justify="between" p="2">
        <Box>
          <Button variant="ghost" className={styles.hamburgerButton}>
            <HamburgerMenuIcon width="18" height="18" />
          </Button>
        </Box>
        <Box>App Router playground</Box>
        <Box>s.hiraoku@gmail.com</Box>
      </Flex>
    </header>
  );
};
