"use client";
import styles from "./Header.module.scss";
import { useAtom } from "jotai";
import { isSidebarOpenAtom } from "@/app/store";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Box, Button, Flex } from "@radix-ui/themes";

type Props = {};

export const Header: React.FC<Props> = ({}) => {
  const [isOpen, toggle] = useAtom(isSidebarOpenAtom);

  return (
    <header>
      <Flex align="center" justify="between" p="2">
        <Box>
          <Button
            variant="ghost"
            onClick={() => toggle()}
            className={styles.hamburgerButton}
          >
            <HamburgerMenuIcon width="18" height="18" />
          </Button>
        </Box>
        <Box>App Router playground</Box>
        <Box>s.hiraoku@gmail.com</Box>
      </Flex>
    </header>
  );
};
