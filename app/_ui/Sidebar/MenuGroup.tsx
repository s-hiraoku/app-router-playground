import { ComponentProps } from "react";
import { MenuItem } from "./MenuItem";
import styles from "./MenuGroup.module.scss";
import { Flex, Heading, Separator } from "@radix-ui/themes";
import { useSidebar } from "./useSidebar";
import { SidebarID } from "./types";

type Props = {
  title: string;
  items: ({ id: SidebarID } & ComponentProps<typeof MenuItem>)[];
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
      <Flex align="center" justify="center">
        <Separator
          size="2"
          className={styles.separator}
          data-collapsed={collapsed}
        />
      </Flex>
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
