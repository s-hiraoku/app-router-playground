import { ComponentProps } from "react";
import { MenuGroup } from "./MenuGroup";
import { MenuItem } from "./MenuItem";

export type SidebarMenuItems = (
  | ComponentProps<typeof MenuGroup>
  | ComponentProps<typeof MenuItem>
)[];
