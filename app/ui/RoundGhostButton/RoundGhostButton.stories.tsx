import { Meta, StoryObj } from "@storybook/react";
import { RoundGhostButton } from "./RoundGhostButton";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export default {
  component: RoundGhostButton,
} as Meta<typeof RoundGhostButton>;

export const Icon: StoryObj<typeof RoundGhostButton> = {
  args: {
    children: <HamburgerMenuIcon width="18" height="18" />,
  },
};
