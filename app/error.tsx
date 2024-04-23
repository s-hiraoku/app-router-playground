"use client";

import { Button, Callout, Heading } from "@radix-ui/themes";
import { useEffect } from "react";
import styles from "./error.module.scss";
import { CrossCircledIcon } from "@radix-ui/react-icons";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={styles.container}>
      <Heading as="h2" color="red" className={styles.title}>
        <CrossCircledIcon width="24" height="24" />
        Sorry, something went wrong.
      </Heading>
      <Callout.Root color="red">
        <Callout.Text>{error.message}</Callout.Text>
      </Callout.Root>
      <div className={styles.buttonWrapper}>
        <Button
          onClick={reset}
          variant="outline"
          className={styles.resetButton}
          size="3"
        >
          Try again
        </Button>
      </div>
    </div>
  );
}
