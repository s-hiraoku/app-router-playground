import type { Meta, StoryFn } from "@storybook/react";
import { MenuItem } from "./MenuItem";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default {
  component: MenuItem,
} as Meta<typeof MenuItem>;

const Template: StoryFn<typeof MenuItem> = (args) => <MenuItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Menu Item",
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
  icon: <GitHubLogoIcon width="18" height="18" />,
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
