import { ComponentProps } from "react";
import { MenuItem } from "./MenuItem";
import styles from "./MenuGroup.module.scss";
import { Heading } from "@radix-ui/themes";

type Props = {
  title: string;
  items: ({ id: number } & ComponentProps<typeof MenuItem>)[];
};

export const MenuGroup: React.FC<Props> = ({ title, items }) => {
  return (
    <section>
      <Heading as="h3" size="1" className={styles.title}>
        {title}
      </Heading>
      <ul className={styles.menu}>
        {items.map((item) => (
          <MenuItem
            key={item.id}
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
