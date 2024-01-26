"use client";
import styles from "./Sidebar.module.css";
import {
  Sidebar as SidebarWrapper,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";

type Props = {};

export const Sidebar: React.FC<Props> = ({}) => {
  return (
    <SidebarWrapper>
      <Menu>
        <SubMenu label="Charts">
          <MenuItem> Pie charts </MenuItem>
          <MenuItem> Line charts </MenuItem>
        </SubMenu>
        <MenuItem> Documentation </MenuItem>
        <MenuItem> Calendar </MenuItem>
      </Menu>
    </SidebarWrapper>
  );
};
