import { createContext } from "react";
import { SidebarContextType } from "./types";

export const SidebarContext = createContext<SidebarContextType | null>(null);
