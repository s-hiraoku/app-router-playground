"use client";

import { Box, Flex, TextFieldInput, Text, Button } from "@radix-ui/themes";
import { useFormState, useFormStatus } from "react-dom";
import styles from "./CredentialsForm.module.scss";
import { authenticate } from "./actions";

type Props = {};

export const CredentialsForm: React.FC<Props> = ({}) => {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <form action={dispatch} className={styles.container}>
      <Flex direction="column" width="100%" gap="3">
        <Box>
          <Text as="label" size="1">
            Email
          </Text>
          <TextFieldInput placeholder="Your email address" />
        </Box>
        <Box>
          <Text as="label" size="1">
            Password
          </Text>
          <TextFieldInput width="100%" color="gray" />
        </Box>
        <Box mt="1">
          <LoginButton />
        </Box>
        <Box>
          {errorMessage && (
            <>
              <p>{errorMessage}</p>
            </>
          )}
        </Box>
      </Flex>
    </form>
  );
};

const LoginButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button variant="soft" className={styles.button} disabled={pending}>
      Login
    </Button>
  );
};
