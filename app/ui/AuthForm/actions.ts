"use server";

import { signIn } from "@/auth";
import { CredentialsUserScheme } from "@/schemes";
import { AuthError } from "next-auth";
import { State } from "./models";
import { sql } from "@vercel/postgres";
import { User } from "@prisma/client";
import { PostgresErrorCodes } from "@/types";

export async function authenticate(prevState: State, formData: FormData) {
  const result = CredentialsUserScheme.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
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

export const signUp = async (prevState: State, formData: FormData) => {
  const result = CredentialsUserScheme.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Sign up.",
    };
  }

  const { email, password } = result.data;

  try {
    await sql<User>`INSERT INTO users (email, password) VALUES (${email}, ${password})`;
  } catch (error) {
    if (error instanceof Error && "code" in error) {
      switch (error.code) {
        case PostgresErrorCodes.UNIQUE_VIOLATION:
          return {
            errors: {},
            message: "Email is already exists.",
          };
        default:
          console.error("Sign up error:", error);
          return {
            errors: {},
            message: "Failed to sign up due to an unexpected error.",
          };
      }
    }
    throw error;
  }
};
