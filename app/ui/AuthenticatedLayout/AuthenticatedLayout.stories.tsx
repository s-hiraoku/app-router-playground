import { Meta, StoryObj } from "@storybook/react";
import { AuthenticatedLayout } from "./AuthenticatedLayout";

export default {
  component: AuthenticatedLayout,
} as Meta<typeof AuthenticatedLayout>;

export const Default: StoryObj<typeof AuthenticatedLayout> = {};
