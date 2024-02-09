"use client";
import styles from "./Header.module.scss";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Box, IconButton, Flex } from "@radix-ui/themes";

type Props = {};

export const Header: React.FC<Props> = ({}) => {
  return (
    <header className={styles.header}>
      <Flex align="center" justify="between" p="2">
        <Box p="1">
          <IconButton
            variant="ghost"
            radius="full"
            className={styles.hamburgerButton}
          >
            <HamburgerMenuIcon width="16" height="16" />
          </IconButton>
        </Box>
        <Box>App Router playground</Box>
        <Box>s.hiraoku@gmail.com</Box>
      </Flex>
    </header>
  );
};
