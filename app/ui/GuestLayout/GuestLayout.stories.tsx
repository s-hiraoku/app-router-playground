import { Meta, StoryObj } from "@storybook/react";
import { GuestLayout } from "./GuestLayout";

export default {
  component: GuestLayout,
} as Meta<typeof GuestLayout>;

export const Default: StoryObj<typeof GuestLayout> = {
  args: {},
};
