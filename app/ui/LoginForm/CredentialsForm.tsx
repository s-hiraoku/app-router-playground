"use client";

import { Box, Flex, TextFieldInput, Text, Button } from "@radix-ui/themes";
import { useFormState, useFormStatus } from "react-dom";
import styles from "./CredentialsForm.module.scss";
import { authenticate } from "./actions";
import { ErrorMessages } from "../ErrorMessages";
import { initialState } from "./models";

export const CredentialsForm: React.FC = () => {
  const [state, dispatch] = useFormState(authenticate, initialState);

  return (
    <form action={dispatch} className={styles.container} noValidate>
      <Flex direction="column" width="100%" gap="3">
        <Box>
          <Text as="label" size="1" htmlFor="email">
            Email
          </Text>
          <TextFieldInput
            id="email"
            type="email"
            name="email"
            placeholder="Your email address"
            aria-describedby="email-error"
          />
        </Box>
        <Box>
          {state?.errors.email && (
            <ErrorMessages id="email-error" errors={state.errors.email} />
          )}
        </Box>
        <Box>
          <Text as="label" size="1" htmlFor="password">
            Password
          </Text>
          <TextFieldInput
            id="password"
            name="password"
            type="password"
            placeholder="Your password"
            aria-describedby="password-error"
          />
        </Box>
        <Box>
          {state?.errors.password && (
            <ErrorMessages id="password-error" errors={state.errors.password} />
          )}
        </Box>
        <Box mt="1">
          <LoginButton />
        </Box>
        <Box>
          {state?.message && <ErrorMessages errors={[state.message]} />}
        </Box>
      </Flex>
    </form>
  );
};

const LoginButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      variant="soft"
      type="submit"
      className={styles.button}
      disabled={pending}
    >
      Login
    </Button>
  );
};
