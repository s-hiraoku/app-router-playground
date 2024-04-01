import { z } from "zod";

export const CredentialsUserScheme = z.object({
  email: z
    .string({
      invalid_type_error: "Please enter an email address.",
    })
    .email({ message: "Please enter a valid email address." }),
  password: z
    .string({ invalid_type_error: "Please enter a password." })
    .min(6, { message: "Name must be at least 6 characters." }),
});
