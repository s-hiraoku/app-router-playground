import { Meta, StoryFn } from "@storybook/react";
import { Menu } from "./Menu";
import { action } from "@storybook/addon-actions";
import {
  HomeIcon,
  GearIcon,
  RocketIcon,
  DashboardIcon,
  PersonIcon,
  ExitIcon,
} from "@radix-ui/react-icons";
import { SidebarProvider } from "./SidebarProvider";

export default {
  component: Menu,
} as Meta<typeof Menu>;

const Template: StoryFn<typeof Menu> = (args) => (
  <SidebarProvider>
    <Menu {...args} />{" "}
  </SidebarProvider>
);

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      id: 1,
      icon: <HomeIcon />,
      label: "Home",
      onClick: action("clicked Home"),
    },
    {
      id: 2,
      icon: <RocketIcon />,
      label: "About",
      onClick: action("clicked About"),
    },
  ],
};

export const WithGroups = Template.bind({});
WithGroups.args = {
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

export const WithIconsAndStatus = Template.bind({});
WithIconsAndStatus.args = {
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
