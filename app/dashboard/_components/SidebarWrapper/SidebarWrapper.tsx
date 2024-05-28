"use client";

import {
  SidebarProvider,
  Sidebar,
  SidebarID,
  SidebarMenuGroupType,
} from "@/app/_ui/Sidebar";
import { SidebarMenuItems } from "@/app/_ui/Sidebar";
import { useCallback, useEffect, useState } from "react";
import * as Icons from "@radix-ui/react-icons";
import { MenuItemWithCategory } from "@/db/userMenuItemRelations";
import { MenuItem } from "@prisma/client";
import { useRouter } from "next/navigation";

type Props = {
  items: Array<MenuItemWithCategory | MenuItem>;
  basePath: string;
};

type SidebarInfo = { id: SidebarID; pathName: string };

const getIconComponent = (iconName: string): React.ReactNode => {
  const IconComponent = Icons[iconName as keyof typeof Icons];
  return IconComponent ? <IconComponent /> : null;
};

const convertMenuItemsToSidebarItems = (
  items: Array<MenuItemWithCategory | MenuItem>
): SidebarMenuItems => {
  if (items.length >= 0 && items[0].hasOwnProperty("category")) {
    const menuItems = items as MenuItemWithCategory[];
    return menuItems.reduce((acc, item) => {
      const category = acc.find(
        (category) => category.title === item.category.name
      );
      if (category) {
        category.items.push({
          id: item.id,
          label: item.name,
          icon: getIconComponent(item.iconName),
        });
      } else {
        acc.push({
          id: item.categoryId ?? "",
          title: item.category.name,
          type: "group",
          items: [
            {
              id: item.id,
              label: item.name,
              icon: getIconComponent(item.iconName),
            },
          ],
        });
      }
      return acc;
    }, [] as Array<SidebarMenuGroupType>);
  }
  return items.map((item) => {
    return {
      id: item.id,
      type: "item",
      label: item.name,
      icon: getIconComponent(item.iconName),
    };
  });
};

const createSidebarInfoItems = (
  items: Array<MenuItemWithCategory | MenuItem>
) => {
  return items.map((item) => {
    return {
      id: item.id,
      pathName: item.pathName,
    };
  });
};

export const SidebarWrapper: React.FC<Props> = ({ items, basePath }) => {
  const [sidebarInfoItems, setSideMenuItems] = useState<SidebarInfo[]>(
    createSidebarInfoItems(items)
  );
  const router = useRouter();

  useEffect(() => {
    setSideMenuItems(createSidebarInfoItems(items));
  }, [items]);

  const handleItemSelect = useCallback((id: SidebarID) => {
    const selectedItem = sidebarInfoItems.find((item) => item.id === id);
    if (selectedItem && selectedItem.pathName) {
      router.push(`${basePath}${selectedItem.pathName}`);
    }
  }, []);

  return (
    <div>
      <SidebarProvider>
        <Sidebar
          items={convertMenuItemsToSidebarItems(items)}
          onItemSelect={handleItemSelect}
        />
      </SidebarProvider>
    </div>
  );
};
