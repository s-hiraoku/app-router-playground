"use server";

import { signOut as nextAuthSignOut } from "@/auth";

export const signOut = async (
  options:
    | { redirectTo?: string | undefined; redirect?: true | undefined }
    | undefined
) => {
  await nextAuthSignOut(options);
};
