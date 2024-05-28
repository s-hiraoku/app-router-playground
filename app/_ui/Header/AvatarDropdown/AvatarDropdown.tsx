import React, { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import styles from "./AvatarDropdown.module.scss";
import { Avatar, DropdownMenu } from "@radix-ui/themes";

type Props = {
  avatar: ComponentPropsWithoutRef<typeof Avatar>;
};

export const AvatarDropdown: React.FC<PropsWithChildren<Props>> = ({
  avatar,
  children: dropdownMenuContent,
}) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <div className={styles.avatar}>
          <Avatar {...avatar} />
        </div>
      </DropdownMenu.Trigger>
      {dropdownMenuContent}
    </DropdownMenu.Root>
  );
};
