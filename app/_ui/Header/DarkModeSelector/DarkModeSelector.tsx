import { SunIcon, MoonIcon, DesktopIcon } from "@radix-ui/react-icons";
import styles from "./DarkModeSelector.module.scss";
import { IconButton, Tooltip } from "@radix-ui/themes";
import { useState } from "react";

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
      darkMode satisfies never;
  }
};

const tooltipContent = (darkMode: DarkModeType) => {
  switch (darkMode) {
    case "system":
      return "System";
    case "dark":
      return "Dark";
    case "light":
      return "Light";
    default:
      darkMode satisfies never;
      throw new Error("Unknown dark mode type");
  }
};

type Props = {
  onDarkModeChange: (darkModeType: DarkModeType) => void;
} & React.ComponentPropsWithRef<typeof IconButton>;

export const DarkModeSelector: React.FC<Props> = ({
  onDarkModeChange,
  ...props
}) => {
  const [darkMode, setDarkMode] = useState<DarkModeType>("system");
  const handleClick = () => {
    const nextDarkMode =
      darkMode === "system" ? "dark" : darkMode === "dark" ? "light" : "system";
    setDarkMode(nextDarkMode);
    onDarkModeChange(nextDarkMode);
  };
  return (
    <Tooltip content={tooltipContent(darkMode)}>
      <IconButton className={styles.button} onClick={handleClick} {...props}>
        {darkModeIcon(darkMode)}
      </IconButton>
    </Tooltip>
  );
};
