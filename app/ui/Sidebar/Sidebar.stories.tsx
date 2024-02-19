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
      id: 1,
      title: "General",
      items: [
        {
          id: 1,
          label: "Dashboard",
          onClick: action("clicked Dashboard"),
        },
        {
          id: 2,
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
          label: "Profile",
          onClick: action("clicked Profile"),
        },
        {
          id: 4,
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
      icon: "🏠",
      label: "Home",
      active: true,
      onClick: action("clicked Home"),
    },
    {
      id: 2,
      icon: "ℹ️",
      label: "About",
      disabled: true,
      onClick: action("clicked About"),
    },
  ],
};
