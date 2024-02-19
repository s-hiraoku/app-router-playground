import { useCallback, useEffect, useState } from "react";
import { MenuItem } from "./MenuItem";
import { MenuGroup } from "./MenuGroup";
import {
  SidebarID,
  SidebarMenuGroupType,
  SidebarMenuItem,
  SidebarMenuItems,
} from "./types";

type Props = {
  items: SidebarMenuItems;
};

export const Menu: React.FC<Props> = ({ items }) => {
  const [activeItem, setActiveItem] = useState<SidebarID>();

  useEffect(() => {
    const firstMenuItemId = findFirstMenuItemId(items);
    if (firstMenuItemId !== undefined) {
      setActiveItem(firstMenuItemId);
    }
  }, [items]);

  const handleItemClick = useCallback((id: SidebarID) => {
    setActiveItem(id);
  }, []);

  return (
    <ul>
      {items.map((item) => {
        if (isMenuGroup(item)) {
          return (
            <MenuGroup
              key={item.id}
              title={item.title}
              items={item.items.map((subItem) => ({
                ...subItem,
                active: subItem.id === activeItem,
                onClick: () => handleItemClick(subItem.id),
              }))}
            />
          );
        }

        return (
          <MenuItem
            key={item.id}
            icon={item.icon}
            prefix={item.prefix}
            suffix={item.suffix}
            active={item.id === activeItem}
            disabled={item.disabled}
            onClick={() => handleItemClick(item.id)}
            label={item.label}
          />
        );
      })}
    </ul>
  );
};

const isMenuGroup = (item: SidebarMenuItem): item is SidebarMenuGroupType => {
  return "items" in item;
};

const findFirstMenuItemId = (
  items: SidebarMenuItems
): SidebarID | undefined => {
  for (const item of items) {
    if (!("items" in item)) {
      return item.id;
    }
    if (item.items.length > 0) {
      return item.items[0].id;
    }
  }
  return undefined;
};
