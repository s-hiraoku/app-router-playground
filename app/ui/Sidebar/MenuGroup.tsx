import { ComponentProps } from "react";
import { MenuItem } from "./MenuItem";
import styles from "./MenuGroup.module.scss";

type Props = {
  title: string;
  items: ComponentProps<typeof MenuItem>[];
};

export const MenuGroup: React.FC<Props> = ({ title, items }) => {
  return (
    <section>
      <h3 className={styles.title}>{title}</h3>
      <ul>
        {items.map((item) => (
          <MenuItem
            key={item.label}
            icon={item.icon}
            prefix={item.prefix}
            suffix={item.suffix}
            active={item.active}
            disabled={item.disabled}
            onClick={item.onClick}
            label={item.label}
          />
        ))}
      </ul>
    </section>
  );
};
