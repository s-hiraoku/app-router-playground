import React from "react";
import type { Preview } from "@storybook/react";
import "../app/global.css";
import { Theme } from "@radix-ui/themes";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Theme>
          <Story />
        </Theme>
      );
    },
  ],
};

export default preview;
