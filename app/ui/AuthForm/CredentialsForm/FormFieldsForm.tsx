import { Box, TextField, Text } from "@radix-ui/themes";
import { ErrorMessages } from "../../ErrorMessages";
import { SignUpFormState } from "./models";

type Props = {
  state: SignUpFormState;
};

export const FormFieldsForm: React.FC<Props> = ({ state }) => {
  return (
    <>
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
        {state?.errors?.email && (
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
        {state?.errors?.password && (
          <ErrorMessages id="password-error" errors={state.errors.password} />
        )}
      </Box>
    </>
  );
};
