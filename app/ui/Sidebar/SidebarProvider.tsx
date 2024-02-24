import { useToggle } from "@/app/hooks";
import { PropsWithChildren } from "react";
import { SidebarContext } from "./SidebarContext";

export const SidebarProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [collapsed, toggle] = useToggle(false);

  return (
    <SidebarContext.Provider value={{ collapsed, toggle }}>
      {children}
    </SidebarContext.Provider>
  );
};
