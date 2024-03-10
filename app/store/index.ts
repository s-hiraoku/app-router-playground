import { atomWithToggle, getPrefersDarkMode } from "./utils";
import { atom } from "jotai";
import { SidebarMenuItems } from "@/app/ui/Sidebar";

const prefersDarkMode = getPrefersDarkMode();
export const isDarkModeAtom = atomWithToggle(prefersDarkMode);

export const sidebarMenuItemsAtom = atom<SidebarMenuItems>;

export const userAtom = atom;
