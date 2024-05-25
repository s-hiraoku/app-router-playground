"use client";

import {
  SidebarProvider,
  Sidebar,
  SidebarID,
  SidebarMenuGroupType,
} from "@/app/ui/Sidebar";
import { SidebarMenuItems } from "@/app/ui/Sidebar";
import { useCallback, useEffect, useState } from "react";
import * as Icons from "@radix-ui/react-icons";
import { MenuItemWithCategory } from "@/db/userMenuItemRelations";
import { MenuItem } from "@prisma/client";

type Props = {
  items: Array<MenuItemWithCategory | MenuItem>;
};

type WithPathName<T> = { pathName: string } & T;

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
          id: Number(item.id),
          label: item.name,
          icon: getIconComponent(item.iconName),
        });
      } else {
        acc.push({
          id: Number(item.categoryId),
          title: item.category.name,
          type: "group",
          items: [
            {
              id: Number(item.id),
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
      id: Number(item.id),
      type: "item",
      label: item.name,
      icon: getIconComponent(item.iconName),
    };
  });
};

export const SidebarWrapper: React.FC<Props> = async ({ items }) => {
  // const [sideMenuItems, setSideMenuItems] =
  //   useState<SidebarMenuItemWithPathNameArray>(convertItems(items));

  // useEffect(() => {
  //   setSideMenuItems(convertItems(items));
  // }, [items]);

  const handleItemSelect = useCallback((id: SidebarID) => {
    console.log(id);
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
