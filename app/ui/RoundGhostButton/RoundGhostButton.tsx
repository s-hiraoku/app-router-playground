import { Button } from "@radix-ui/themes";
import styles from "./RoundGhostButton.module.scss";
import { ComponentProps } from "react";

export const RoundGhostButton: React.FC<ComponentProps<typeof Button>> = ({
  children,
  ...props
}) => {
  return (
    <Button className={styles.container} {...props} variant="ghost">
      {children}
    </Button>
  );
};
