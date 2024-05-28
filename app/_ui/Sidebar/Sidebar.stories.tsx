import { Meta, StoryFn } from "@storybook/react";
import { Sidebar } from "./Sidebar";
import { action } from "@storybook/addon-actions";
import {
  DashboardIcon,
  ExitIcon,
  GearIcon,
  HomeIcon,
  PersonIcon,
  RocketIcon,
} from "@radix-ui/react-icons";
import { SidebarProvider } from "./SidebarProvider";

export default {
  component: Sidebar,
} as Meta<typeof Sidebar>;

const Template: StoryFn<typeof Sidebar> = (args) => (
  <SidebarProvider>
    <Sidebar {...args} />
  </SidebarProvider>
);

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      id: 1,
      title: "General",
      items: [
        {
          id: 1,
          icon: <DashboardIcon />,
          label: "Dashboard",
          onClick: action("clicked Dashboard"),
        },
        {
          id: 2,
          icon: <GearIcon />,
          label: "Settings",
          onClick: action("clicked Settings"),
        },
      ],
    },
    {
      id: 2,
      title: "User",
      items: [
        {
          id: 3,
          icon: <PersonIcon />,
          label: "Profile",
          onClick: action("clicked Profile"),
        },
        {
          id: 4,
          icon: <ExitIcon />,
          label: "Log out",
          onClick: action("clicked Log out"),
        },
      ],
    },
  ],
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  items: [
    {
      id: 1,
      icon: <HomeIcon />,
      label: "Home",
      active: true,
      onClick: action("clicked Home"),
    },
    {
      id: 2,
      icon: <RocketIcon />,
      label: "About",
      disabled: true,
      onClick: action("clicked About"),
    },
  ],
};
