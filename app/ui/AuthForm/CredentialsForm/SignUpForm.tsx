"use client";

import { Box, Flex, TextField, Text } from "@radix-ui/themes";
import { SubmitButton } from "./SubmitButton";
import { ErrorMessages } from "../../ErrorMessages";
import { useFormState } from "react-dom";
import { signUp } from "../actions";
import { initialSignUpFormState } from "./models";
import styles from "./SignUpForm.module.scss";
import { FormFieldsForm } from "./FormFieldsForm";

export const SignUpForm: React.FC = () => {
  const [state, dispatch] = useFormState(signUp, initialSignUpFormState);

  return (
    <form action={dispatch} className={styles.container} noValidate>
      <Flex direction="column" width="100%" gap="3">
        <FormFieldsForm state={state} />
        <Box>
          <Text as="label" size="1" htmlFor="username">
            Username
          </Text>
          <TextField.Root
            name="username"
            type="text"
            placeholder="Your username"
            id="username"
            aria-describedby="username-error"
          />
        </Box>
        <Box>
          {state?.errors?.username && (
            <ErrorMessages id="username-error" errors={state.errors.username} />
          )}
        </Box>
        <Box mt="1">
          <SubmitButton authAction="signUp" />
        </Box>
        <Box>
          {state?.message && <ErrorMessages errors={[state.message]} />}
        </Box>
      </Flex>
    </form>
  );
};
