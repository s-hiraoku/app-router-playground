import { SunIcon, MoonIcon, DesktopIcon } from "@radix-ui/react-icons";
import styles from "./DarkModeSelector.module.scss";
import { IconButton, Tooltip, DropdownMenu, Flex } from "@radix-ui/themes";
import { useTheme } from "next-themes";

export type DarkModeType = "system" | "dark" | "light";

const darkModeIcon = (darkMode: DarkModeType) => {
  switch (darkMode) {
    case "system":
      return <DesktopIcon width="24" height="24" />;
    case "dark":
      return <MoonIcon width="24" height="24" />;
    case "light":
      return <SunIcon width="24" height="24" />;
    default:
      throw new Error("Unknown dark mode type");
  }
};

const tooltipContent = (darkMode: DarkModeType) => {
  switch (darkMode) {
    case "system":
      return "System";
    case "dark":
      return "dark";
    case "light":
      return "Light";
    default:
      throw new Error("Unknown dark mode type");
  }
};

const DarkModeSelectorContent: React.FC<{
  setTheme: (theme: DarkModeType) => void;
}> = ({ setTheme }) => (
  <DropdownMenu.Content>
    <DropdownMenu.Item shortcut="⌘ S" onClick={() => setTheme("system")}>
      System
    </DropdownMenu.Item>
    <DropdownMenu.Item shortcut="⌘ D" onClick={() => setTheme("dark")}>
      Dark
    </DropdownMenu.Item>
    <DropdownMenu.Item shortcut="⌘ L" onClick={() => setTheme("light")}>
      Light
    </DropdownMenu.Item>
  </DropdownMenu.Content>
);

type Props = {
  onDarkModeChange?: (darkModeType: DarkModeType) => void;
} & React.ComponentPropsWithRef<typeof IconButton>;

export const DarkModeSelector: React.FC<Props> = ({
  onDarkModeChange,
  ...props
}) => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (newTheme: DarkModeType) => {
    setTheme(newTheme);
    onDarkModeChange?.(newTheme);
  };

  return (
    <DropdownMenu.Root>
      <Tooltip content={tooltipContent(theme as DarkModeType)} side="bottom">
        <DropdownMenu.Trigger>
          <IconButton className={styles.button} {...props}>
            <Flex gap="2" align="center">
              {darkModeIcon(theme as DarkModeType)}
              <DropdownMenu.TriggerIcon />
            </Flex>
          </IconButton>
        </DropdownMenu.Trigger>
      </Tooltip>
      <DarkModeSelectorContent setTheme={handleThemeChange} />
    </DropdownMenu.Root>
  );
};
