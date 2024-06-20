"use server";

import { signIn } from "@/auth";
import { CredentialsUserScheme, SignUpUserScheme } from "@/schemes";
import { AuthError } from "next-auth";
import { PrismaErrorCodes } from "@/types";
import { createUser, getUserByEmail } from "@/db/users";
import bcrypt from "bcryptjs";
import { Prisma } from "@prisma/client";
import { CredentialsFormState, SignUpFormState } from "./CredentialsForm";
import { registerSidebarItems } from "@/services/sidebarService";

export async function credentialsSignIn(
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
        case "CallbackRouteError":
          return {
            errors: {},
            message:
              error.cause?.err?.message ??
              "Something went wrong with CallbackRouteError.",
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
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return {
        errors: {},
        message: `${email} already exists.`,
      };
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await createUser({
      name: username,
      email,
      password: hashedPassword,
    });

    await registerSidebarItems(user.id);

    await signIn("credentials", {
      email,
      password,
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      console.error("Sign up error (PrismaClientKnownRequestError):", error);
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
    }
    if (error instanceof Prisma.PrismaClientUnknownRequestError) {
      console.error("Sign up error (PrismaClientUnknownRequestError):", error);
      return {
        errors: {},
        message: `Failed to sign up due to an unexpected error.`,
      };
    }
    throw error;
  }
};

export async function googleSignIn() {
  await signIn("google");
}

export async function gitHubSignIn() {
  await signIn("github");
}
