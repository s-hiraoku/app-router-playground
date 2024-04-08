"use client";

import { Box, Flex, TextField, Text, Button } from "@radix-ui/themes";
import { useFormState, useFormStatus } from "react-dom";
import styles from "./CredentialsForm.module.scss";
import { authenticate, signUp } from "./actions";
import { ErrorMessages } from "../ErrorMessages";
import { AuthAction, initialState } from "./models";

type Props = {
  authAction: AuthAction;
};

export const CredentialsForm: React.FC<Props> = ({ authAction }) => {
  const [state, dispatch] = useFormState(
    authAction === "login" ? authenticate : signUp,
    initialState
  );

  return (
    <form action={dispatch} className={styles.container} noValidate>
      <Flex direction="column" width="100%" gap="3">
        <Box>
          <Text as="label" size="1" htmlFor="email">
            Email
          </Text>
          <TextField.Root
            placeholder="Your email address"
            name="email"
            type="email"
            id="email"
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
          <TextField.Root
            name="password"
            type="password"
            placeholder="Your password"
            id="password"
            aria-describedby="password-error"
          />
        </Box>
        <Box>
          {state?.errors.password && (
            <ErrorMessages id="password-error" errors={state.errors.password} />
          )}
        </Box>
        <Box mt="1">
          <AuthButton authAction={authAction} />
        </Box>
        <Box>
          {state?.message && <ErrorMessages errors={[state.message]} />}
        </Box>
      </Flex>
    </form>
  );
};

const AuthButton: React.FC<Props> = ({ authAction }) => {
  const buttonText = authAction === "login" ? "Login" : "Sign up";
  const { pending } = useFormStatus();

  return (
    <Button
      variant="soft"
      type="submit"
      className={styles.button}
      disabled={pending}
    >
      {buttonText}
    </Button>
  );
};
