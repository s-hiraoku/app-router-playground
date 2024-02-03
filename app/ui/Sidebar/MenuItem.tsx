import { Button } from "@radix-ui/themes";
import { ReactNode, PropsWithChildren, ComponentType } from "react";

type Props = {
  icon?: ReactNode;
  prefix?: ReactNode;
  suffix?: ReactNode;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

export const MenuItem: React.FC<PropsWithChildren<Props>> = ({
  icon,
  children,
  prefix,
  suffix,
  active = false,
  disabled = false,
  onClick,
}) => {
  return (
    <li>
      <Button disabled={disabled} onClick={onClick} variant="soft">
        {icon}
        {prefix}
        {children}
        {suffix}
      </Button>
    </li>
  );
};
