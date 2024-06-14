import type { Account, NextAuthConfig, Profile, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { CredentialsUserScheme } from "./schemes";
import { getUserByEmail } from "@/db/users";
import GitHubProvider from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import prisma from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { registerSidebarItems } from "@/services/sidebarService";
import { JWT } from "next-auth/jwt";
import { AdapterUser } from "next-auth/adapters";

// Session strategy setting
// https://github.com/nextauthjs/next-auth/discussions/4394
// jwt when using Credentials authentication.
const sessionStrategy = "jwt"; // Set to either "database" or "jwt"

const jwtForSessionStrategyDatabase = async ({
  token,
  user,
  // Check why was the jwt callback invoked. Possible reasons are:
  // user sign-in: First time the callback is invoked, user, profile and account will be present.
  // user sign-up: a user is created for the first time in the database (when AuthConfig.session.strategy is set to "database")
  // update event: Triggered by the useSession().update method. In the latter case, trigger will be undefined.
  trigger,
}: {
  token: JWT;
  user?: User | AdapterUser;
  account?: Account | null;
  profile?: Profile;
  trigger?: "signIn" | "signUp" | "update" | undefined;
}): Promise<JWT> => {
  if (user && user.id && trigger === "signUp") {
    console.log("Registering default menu for new user");
    await registerSidebarItems(user.id);
  }
  if (!token || !token.sub) {
    throw new Error("Token does not contain sub property");
  }

  return token;
};

const jwtForSessionStrategyJwt = async ({
  token,
}: {
  token: JWT;
}): Promise<JWT> => {
  if (!token || !token.sub) {
    throw new Error("Token does not contain sub property");
  }
  return token;
};

export const authConfig = {
  pages: {
    signIn: "/login",
    signOut: "/logout",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }
      return true;
    },
    async session({ session, token }) {
      if (token && token.sub) {
        session.user.id = token.sub;
      } else {
        throw new Error("Token does not contain sub property");
      }
      return session;
    },
    jwt:
      sessionStrategy === "jwt"
        ? jwtForSessionStrategyJwt
        : jwtForSessionStrategyDatabase,
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const parsedCredentials = CredentialsUserScheme.safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUserByEmail(email);
          if (!user) return null;
          const passwordsMatch =
            user.password && (await bcrypt.compare(password, user.password));
          if (passwordsMatch) return user;
        }

        console.log("Invalid credentials");
        return null;
      },
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  adapter: PrismaAdapter(prisma),
  session: { strategy: sessionStrategy },
  secret: process.env.AUTH_SECRET,
} satisfies NextAuthConfig;
