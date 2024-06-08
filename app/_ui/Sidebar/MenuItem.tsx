import { Link, Tooltip } from "@radix-ui/themes";
import { ReactNode } from "react";
import styles from "./MenuItem.module.scss";
import { useSidebar } from "./useSidebar";
import { SidebarContextType } from "./types";

type Props = {
  icon?: ReactNode;
  prefix?: ReactNode;
  suffix?: ReactNode;
  label: string;
  active?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

const ActiveIndicator: React.FC<{ active: boolean }> = ({ active }) => (
  <div className={styles.activeIndicator} data-active={active} />
);

type ContentProps = {
  collapsed: SidebarContextType["collapsed"];
} & Props;

const Content: React.FC<ContentProps> = ({
  icon,
  prefix,
  suffix,
  collapsed,
  label,
  onClick,
  disabled = false,
}) => {
  const content = (
    <Link
      role="button"
      ml="1"
      onClick={onClick}
      className={styles.item}
      data-disabled={disabled}
      data-collapsed={collapsed}
    >
      <span className={styles.content}>
        {icon && <span className={styles.icon}>{icon}</span>}
        {prefix && (
          <span className={styles.prefix} data-collapsed={collapsed}>
            {prefix}
          </span>
        )}
        <span className={styles.label} data-collapsed={collapsed}>
          {label}
        </span>
        {suffix && (
          <span className={styles.suffix} data-collapsed={collapsed}>
            {suffix}
          </span>
        )}
      </span>
    </Link>
  );

  return collapsed ? (
    <Tooltip content={label} side="right">
      {content}
    </Tooltip>
  ) : (
    content
  );
};

export const MenuItem: React.FC<Props> = (props) => {
  const { collapsed } = useSidebar();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (props.disabled) {
      e.preventDefault();
      return;
    }
    props.onClick?.(e);
  };

  return (
    <li className={styles.container}>
      <ActiveIndicator active={props.active || false} />
      <Content {...props} collapsed={collapsed} onClick={handleClick} />
    </li>
  );
};
