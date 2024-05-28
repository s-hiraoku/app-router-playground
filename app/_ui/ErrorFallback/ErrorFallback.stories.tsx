import { Meta, StoryObj } from "@storybook/react";
import { ErrorFallback } from "./ErrorFallback";

export default {
  component: ErrorFallback,
} as Meta<typeof ErrorFallback>;

export const Default: StoryObj<typeof ErrorFallback> = {
  args: { error: { message: "エラーメッセージです。" } },
};
