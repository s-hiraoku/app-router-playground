"use server";

import { signIn } from "@/auth";
import { AuthUserScheme } from "@/schemes";
import { AuthError } from "next-auth";
import { State } from "./models";

export async function authenticate(prevState: State, formData: FormData) {
  const validatedFields = AuthUserScheme.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to authenticate.",
    };
  }

  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            errors: {},
            message: "Invalid credentials.",
          };
        default:
          return {
            errors: {},
            message: "Something went wrong.",
          };
      }
    }
    throw error;
  }
}
