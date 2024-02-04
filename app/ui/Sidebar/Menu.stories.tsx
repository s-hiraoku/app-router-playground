import { Meta, StoryObj } from "@storybook/react";
import { Menu } from "./Menu";

export default {
  title: "Components/Menu",
  component: Menu,
} as Meta<typeof Menu>;

export const Default: StoryObj<typeof Menu> = {
  args: {},
};
