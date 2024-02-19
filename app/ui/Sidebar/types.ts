import { ComponentProps } from "react";
import { MenuGroup } from "./MenuGroup";
import { MenuItem } from "./MenuItem";

export type SidebarID = SidebarMenuItemType["id"];

export type SidebarMenuItemType = { id: number } & ComponentProps<
  typeof MenuItem
>;
export type SidebarMenuGroupType = { id: number } & ComponentProps<
  typeof MenuGroup
>;

export type SidebarMenuItem = SidebarMenuGroupType | SidebarMenuItemType;

export type SidebarMenuItems = SidebarMenuItem[];
