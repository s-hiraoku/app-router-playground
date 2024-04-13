"use client";

import { useFormState } from "react-dom";
import { authenticate } from "../actions";
import { initialCredentialFormState } from "./models";
import styles from "./CredentialsForm.module.scss";
import { Box, Flex, TextField, Text } from "@radix-ui/themes";
import { FormFieldsForm } from "./FormFieldsForm";
import { SubmitButton } from "./SubmitButton";
import { ErrorMessages } from "../../ErrorMessages";

export const CredentialsForm: React.FC = () => {
  const [state, dispatch] = useFormState(
    authenticate,
    initialCredentialFormState
  );

  return (
    <form action={dispatch} className={styles.container} noValidate>
      <Flex direction="column" width="100%" gap="3">
        <FormFieldsForm state={state} />
        <Box mt="1">
          <SubmitButton authAction="login" />
        </Box>
        <Box>
          {state?.message && <ErrorMessages errors={[state.message]} />}
        </Box>
      </Flex>
    </form>
  );
};
