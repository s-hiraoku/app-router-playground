import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import styles from "./AvatarDropdown.module.scss";
import { Avatar, DropdownMenu } from "@radix-ui/themes";

type Props = {
  avatar: ComponentPropsWithoutRef<typeof Avatar>;
};

export const AvatarDropdown: React.FC<PropsWithChildren<Props>> = ({
  avatar,
  children,
}) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <div className={styles.avatar}>
          <Avatar {...avatar} />
        </div>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content size="2">
        <DropdownMenu.Item shortcut="⌘ E">Edit</DropdownMenu.Item>
        <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>

        <DropdownMenu.Separator />
        <DropdownMenu.Item shortcut="⌘ ⌫" color="red">
          Delete
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};
