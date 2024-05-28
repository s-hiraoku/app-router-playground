export type CredentialsFormState =
  | {
      errors?: {
        email?: string[];
        password?: string[];
      };
      message: string;
    }
  | undefined;

export const initialCredentialFormState = {
  errors: {
    email: [],
    password: [],
  },
  message: "",
} satisfies CredentialsFormState;

export type SignUpFormState =
  | {
      errors?: {
        email?: string[];
        password?: string[];
        username?: string[];
      };
      message: string;
    }
  | undefined;

export const initialSignUpFormState = {
  errors: {
    email: [],
    password: [],
    username: [],
  },
  message: "",
} satisfies SignUpFormState;

export type AuthAction = "login" | "signUp";
