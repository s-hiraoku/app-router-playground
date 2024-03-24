export type State =
  | {
      errors?: {
        email?: string[];
        password?: string[];
      };
      message: string;
    }
  | undefined;

export const initialState = {
  errors: {
    email: [],
    password: [],
  },
  message: "",
} satisfies State;
