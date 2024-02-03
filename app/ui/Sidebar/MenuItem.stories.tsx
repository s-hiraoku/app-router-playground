import type { Meta, StoryFn } from "@storybook/react";
import { MenuItem } from "./MenuItem";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default {
  title: "Components/MenuItem",
  component: MenuItem,
} as Meta<typeof MenuItem>;

const Template: StoryFn<typeof MenuItem> = (args) => <MenuItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Menu Item",
  active: false,
  disabled: false,
};

export const WithPrefix = Template.bind({});
WithPrefix.args = {
  ...Default.args,
  prefix: <span>🌟</span>,
};

export const WithSuffix = Template.bind({});
WithSuffix.args = {
  ...Default.args,
  suffix: <span>🔗</span>,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...Default.args,
  icon: <GitHubLogoIcon />,
};

export const Active = Template.bind({});
Active.args = {
  ...Default.args,
  active: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
