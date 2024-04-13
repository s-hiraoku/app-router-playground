"use server";

import { signIn } from "@/auth";
import { CredentialsUserScheme, SignUpUserScheme } from "@/schemes";
import { AuthError } from "next-auth";
import { PrismaErrorCodes } from "@/types";
import { createUser } from "@/db/user";
import bcrypt from "bcryptjs";
import { Prisma } from "@prisma/client";
import { CredentialsFormState, SignUpFormState } from "./CredentialsForm";

export async function authenticate(
  prevState: CredentialsFormState,
  formData: FormData
) {
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

export const signUp = async (
  prevState: SignUpFormState,
  formData: FormData
) => {
  const result = SignUpUserScheme.safeParse({
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Sign up.",
    };
  }

  const { email, password, username } = result.data;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await createUser({
      name: username,
      email,
      password: hashedPassword,
    });
  } catch (error) {
    console.error("Sign up error:", error);
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      switch (error.code) {
        case PrismaErrorCodes.UNIQUE_CONSTRAINT_FAILED:
          return {
            errors: {},
            message: `${email} already exists.`,
          };
        default:
          console.error("Sign up error:", error);
          return {
            errors: {},
            message: `Failed to sign up due to an unexpected error.`,
          };
      }
    } else if (error instanceof Prisma.PrismaClientUnknownRequestError) {
      console.error("Sign up error:", error);
      return {
        errors: {},
        message: `Failed to sign up due to an unexpected error.`,
      };
    }
    throw error;
  }
};
