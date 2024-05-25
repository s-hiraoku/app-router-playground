import { ComponentProps } from "react";
import { MenuGroup } from "./MenuGroup";
import { MenuItem } from "./MenuItem";

export type SidebarID = SidebarMenuItem["id"];

export type SidebarMenuItemType = { id: number; type: "item" } & ComponentProps<
  typeof MenuItem
>;
export type SidebarMenuGroupType = {
  id: number;
  type: "group";
} & ComponentProps<typeof MenuGroup>;

export type SidebarMenuItem = SidebarMenuGroupType | SidebarMenuItemType;

export type SidebarMenuItems = SidebarMenuItem[];

export type SidebarContextType = {
  collapsed: boolean;
  toggle: () => void;
};

export const isSidebarMenuGroup = (
  item: SidebarMenuItem
): item is SidebarMenuGroupType => {
  return item.type === "group";
};
