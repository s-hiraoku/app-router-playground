import { Link } from "@radix-ui/themes";
import { ReactNode } from "react";
import styles from "./MenuItem.module.scss";
import classNames from "classnames";

type Props = {
  icon?: ReactNode;
  prefix?: ReactNode;
  suffix?: ReactNode;
  label: string;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

export const MenuItem: React.FC<Props> = ({
  icon,
  prefix,
  suffix,
  label,
  active = false,
  disabled = false,
  onClick,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    onClick?.();
  };

  return (
    <li aria-disabled={disabled} className={styles.container}>
      {active && <span>Active</span>}
      <Link
        onClick={handleClick}
        className={classNames(styles.item, {
          [styles.disabled]: disabled,
        })}
      >
        <span className={styles.content}>
          {icon && <span className={styles.icon}>{icon}</span>}
          {prefix && <span className={styles.prefix}>{prefix}</span>}
          <span className={styles.label}>{label}</span>
          {suffix && <span className={styles.suffix}>{suffix}</span>}
        </span>
      </Link>
    </li>
  );
};
