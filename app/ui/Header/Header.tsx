"use client";
import styles from "./Header.module.scss";
import {
  HamburgerMenuIcon,
  MagnifyingGlassIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import { Box, IconButton, Flex, Avatar } from "@radix-ui/themes";

type Props = {};

export const Header: React.FC<Props> = ({}) => {
  return (
    <header className={styles.header}>
      <Flex align="center" justify="between" px="6" py="2">
        <Box p="1">
          <IconButton
            variant="ghost"
            radius="full"
            size="3"
            className={styles.hamburgerButton}
          >
            <HamburgerMenuIcon width="24" height="24" />
          </IconButton>
        </Box>
        <Box>App Router playground</Box>
        <Box>
          <Flex align="center" justify="between" gap="5">
            <Box>
              <IconButton
                color="gray"
                size="3"
                variant="ghost"
                className={styles.icon}
              >
                <MagnifyingGlassIcon width="24" height="24" />
              </IconButton>
            </Box>
            <Box>
              <IconButton
                color="gray"
                size="3"
                variant="ghost"
                className={styles.icon}
              >
                <SunIcon width="24" height="24" />
              </IconButton>
            </Box>
            <Box pl="4">
              <Avatar fallback={""} color="gray" />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </header>
  );
};
