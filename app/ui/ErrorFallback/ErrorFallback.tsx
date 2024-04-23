"use client";

import { FallbackProps } from "react-error-boundary";
import styles from "./ErrorFallback.module.scss";
import { Callout, Heading } from "@radix-ui/themes";
import { CrossCircledIcon } from "@radix-ui/react-icons";

type Props = {} & FallbackProps;

export const ErrorFallback: React.FC<Props> = ({ error }) => {
  return (
    <div className={styles.container}>
      <Heading as="h2" color="red" className={styles.title}>
        <CrossCircledIcon width="24" height="24" />
        Sorry, something went wrong.
      </Heading>
      <Callout.Root mt="4" color="red">
        <Callout.Text>{error.message}</Callout.Text>
      </Callout.Root>
    </div>
  );
};
