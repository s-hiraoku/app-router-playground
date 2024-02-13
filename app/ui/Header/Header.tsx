"use client";
import styles from "./Header.module.scss";
import { HamburgerMenuIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Box, IconButton, Flex, Avatar } from "@radix-ui/themes";
import { DarkModeSelector, DarkModeType } from "./DarkModeSelector";
import { useSetAtom } from "jotai";
import { isDarkModeAtom } from "@/app/store";
import { useSystemDarkMode } from "@/app/hooks/useSystemDarkMode";

type Props = {};

export const Header: React.FC<Props> = ({}) => {
  const setDarkMode = useSetAtom(isDarkModeAtom);
  const systemDarkMode = useSystemDarkMode();
  const handleDarkModeChange = (darkMode: DarkModeType) => {
    if (darkMode === "system") {
      setDarkMode(systemDarkMode === "dark" ? true : false);
      return;
    }
    setDarkMode(darkMode === "dark" ? true : false);
  };
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
              <DarkModeSelector
                color="gray"
                size="3"
                variant="ghost"
                className={styles.icon}
                onDarkModeChange={handleDarkModeChange}
              />
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
