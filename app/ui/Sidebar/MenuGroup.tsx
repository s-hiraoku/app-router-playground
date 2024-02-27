import { ComponentProps } from "react";
import { MenuItem } from "./MenuItem";
import styles from "./MenuGroup.module.scss";
import { Heading } from "@radix-ui/themes";
import { useSidebar } from "./useSidebar";

type Props = {
  title: string;
  items: ({ id: number } & ComponentProps<typeof MenuItem>)[];
};

export const MenuGroup: React.FC<Props> = ({ title, items }) => {
  const { collapsed } = useSidebar();
  return (
    <section>
      <Heading
        as="h3"
        size="1"
        className={styles.title}
        data-collapsed={collapsed}
      >
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
