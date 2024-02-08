import { Meta, StoryFn } from "@storybook/react";
import { Menu } from "./Menu";
import { MenuItem } from "./MenuItem";
import { MenuGroup } from "./MenuGroup";
import { action } from "@storybook/addon-actions";

export default {
  component: Menu,
} as Meta<typeof Menu>;

const Template: StoryFn<typeof Menu> = (args) => <Menu {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      label: "Home",
      onClick: action("clicked Home"),
    },
    {
      label: "About",
      onClick: action("clicked About"),
    },
  ],
};

export const WithGroups = Template.bind({});
WithGroups.args = {
  items: [
    {
      title: "General",
      items: [
        {
          label: "Dashboard",
          onClick: action("clicked Dashboard"),
        },
        {
          label: "Settings",
          onClick: action("clicked Settings"),
        },
      ],
    },
    {
      title: "User",
      items: [
        {
          label: "Profile",
          onClick: action("clicked Profile"),
        },
        {
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
      icon: "🏠",
      label: "Home",
      active: true,
      onClick: action("clicked Home"),
    },
    {
      icon: "ℹ️",
      label: "About",
      disabled: true,
      onClick: action("clicked About"),
    },
  ],
};
