import type { Meta, StoryFn } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { MenuGroup } from "./MenuGroup";

export default {
  component: MenuGroup,
} as Meta<typeof MenuGroup>;

const Template: StoryFn<typeof MenuGroup> = (args) => <MenuGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "サンプルメニュー",
  items: [
    {
      id: 1,
      label: "アイテム1",
      icon: "📄",
      prefix: "🔍",
      suffix: "🔚",
      active: false,
      disabled: false,
      onClick: action("アイテム1がクリックされました"),
    },
    {
      id: 2,
      label: "アイテム2",
      icon: "📁",
      prefix: "🔍",
      suffix: "🔚",
      active: true,
      disabled: false,
      onClick: action("アイテム2がクリックされました"),
    },
    {
      id: 3,
      label: "アイテム3",
      icon: "🔒",
      prefix: "🔍",
      suffix: "🔚",
      active: false,
      disabled: true,
      onClick: action("アイテム3がクリックされました"),
    },
  ],
};
