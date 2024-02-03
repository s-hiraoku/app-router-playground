import { Button } from "@radix-ui/themes";
import { ReactNode, PropsWithChildren, ComponentType } from "react";

type Props = {
  icon?: ComponentType;
  prefix?: ReactNode;
  suffix?: ReactNode;
  active: boolean;
  disabled: boolean;
};

export const MenuItem: React.FC<PropsWithChildren<Props>> = ({
  icon: Icon,
  children,
  prefix,
  suffix,
  active = false,
  disabled = false,
}) => {
  return (
    <li>
      <Button disabled={disabled}>
        {Icon && <Icon />}
        {prefix}
        {children}
        {suffix}
      </Button>
    </li>
  );
};
