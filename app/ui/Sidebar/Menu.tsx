import { ComponentProps } from "react";
import { MenuItem } from "./MenuItem";
import { MenuGroup } from "./MenuGroup";

type Props = {
  items: (ComponentProps<typeof MenuGroup> | ComponentProps<typeof MenuItem>)[];
};

export const Menu: React.FC<Props> = ({ items }) => {
  return (
    <>
      {items.map((item) => {
        if (isMenuGroup(item)) {
          return (
            <MenuGroup key={item.title} title={item.title} items={item.items} />
          );
        }

        return (
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
        );
      })}
    </>
  );
};

const isMenuGroup = (
  item: ComponentProps<typeof MenuGroup> | ComponentProps<typeof MenuItem>
): item is ComponentProps<typeof MenuGroup> => {
  return item.hasOwnProperty("title");
};
