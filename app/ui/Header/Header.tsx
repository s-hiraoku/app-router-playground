"use client";

import styles from "./Header.module.scss";
import {
  EnterIcon,
  HamburgerMenuIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import { Box, IconButton, Flex, Avatar, DropdownMenu } from "@radix-ui/themes";
import { DarkModeSelector, DarkModeType } from "./DarkModeSelector";
import { useSetAtom } from "jotai";
import { isDarkModeAtom } from "@/app/store";
import { useSystemDarkMode } from "@/app/hooks/useSystemDarkMode";
import { User } from "next-auth";
import { useRouter } from "next/navigation";
import { AvatarDropdown } from "./AvatarDropdown/AvatarDropdown";
import { useCallback } from "react";
import { signOut } from "./actions";

type Props = { user: User | undefined };

export const Header: React.FC<Props> = ({ user }) => {
  const router = useRouter();
  const setDarkMode = useSetAtom(isDarkModeAtom);
  const systemDarkMode = useSystemDarkMode();

  const handleDarkModeChange = (darkMode: DarkModeType) => {
    if (darkMode === "system") {
      setDarkMode(systemDarkMode === "dark" ? true : false);
      return;
    }
    setDarkMode(darkMode === "dark" ? true : false);
  };

  const handleLogin = useCallback(() => {
    router.push("/login");
  }, [router]);

  const handleLogout = useCallback(async () => {
    await signOut({ redirectTo: "/" });
  }, []);

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
              {user ? (
                <AvatarDropdown
                  avatar={{
                    src: user.image ?? undefined,
                    fallback: user.name?.charAt(0).toUpperCase() ?? "",
                    color: "gray",
                  }}
                >
                  <DropdownMenu.Content>
                    <DropdownMenu.Item shortcut="⌘ S">
                      Settings
                    </DropdownMenu.Item>
                    <DropdownMenu.Separator />
                    <DropdownMenu.Item shortcut="⌘ E" onClick={handleLogout}>
                      Log out
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </AvatarDropdown>
              ) : (
                <IconButton
                  color="gray"
                  size="3"
                  variant="ghost"
                  className={styles.icon}
                  onClick={handleLogin}
                >
                  <EnterIcon width="24" height="24" />
                </IconButton>
              )}
            </Box>
          </Flex>
        </Box>
      </Flex>
    </header>
  );
};
