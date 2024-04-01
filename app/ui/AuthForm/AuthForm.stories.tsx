import { Meta, StoryObj } from "@storybook/react";
import { AuthForm } from "./AuthForm";

export default {
  component: AuthForm,
} as Meta<typeof AuthForm>;

export const Default: StoryObj<typeof AuthForm> = {
  args: {},
};
