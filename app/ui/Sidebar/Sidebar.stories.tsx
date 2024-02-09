import { Meta, StoryFn } from "@storybook/react";
import { Sidebar } from "./Sidebar";
import { action } from "@storybook/addon-actions";

export default {
  component: Sidebar,
} as Meta<typeof Sidebar>;

const Template: StoryFn<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Default = Template.bind({});
Default.args = {
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

export const WithIcons = Template.bind({});
WithIcons.args = {
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
