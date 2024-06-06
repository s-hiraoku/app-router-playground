import { Link } from "@radix-ui/themes";
import { ReactNode } from "react";
import styles from "./MenuItem.module.scss";
import { useSidebar } from "./useSidebar";

type Props = {
  icon?: ReactNode;
  prefix?: ReactNode;
  suffix?: ReactNode;
  label: string;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

const ActiveIndicator: React.FC<{ active: boolean }> = ({ active }) => (
  <div className={styles.activeIndicator} data-active={active} />
);

export const MenuItem: React.FC<Props> = ({
  icon,
  prefix,
  suffix,
  label,
  active = false,
  disabled = false,
  onClick,
}) => {
  const { collapsed } = useSidebar();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    onClick?.();
  };

  return (
    <li className={styles.container}>
      <ActiveIndicator active={active} />
      <Link
        role="button"
        ml="1"
        onClick={handleClick}
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
    </li>
  );
};
