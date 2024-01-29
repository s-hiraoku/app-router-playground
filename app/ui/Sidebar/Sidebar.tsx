"use client";
import { ScrollArea } from "@radix-ui/themes";
import styles from "./Sidebar.module.scss";
import classNames from "classnames";

type Props = { isOpen: boolean };

export const Sidebar: React.FC<Props> = ({ isOpen }) => {
  return (
    <aside className={classNames(styles.sidebar, { [styles.open]: isOpen })}>
      <nav>
        <ScrollArea>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Works</li>
            <li>Contact</li>
          </ul>
        </ScrollArea>
      </nav>
    </aside>
  );
};
