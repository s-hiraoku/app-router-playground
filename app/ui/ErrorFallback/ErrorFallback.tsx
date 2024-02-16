"use client";
import { FallbackProps } from "react-error-boundary";
import styles from "./ErrorFallback.module.scss";
import { Heading } from "@radix-ui/themes";
import { Cross2Icon } from "@radix-ui/react-icons";

type Props = {} & FallbackProps;

export const ErrorFallback: React.FC<Props> = ({ error }) => {
  return (
    <div className={styles.container}>
      <Heading as="h2" color="tomato" className={styles.title}>
        <Cross2Icon width="24" height="24" />
        エラーが発生しました
      </Heading>
      <pre>{error.message}</pre>
    </div>
  );
};
