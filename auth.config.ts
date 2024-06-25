import type { NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { CredentialsUserScheme } from "./schemes";
import { getUserByEmail } from "@/db/users";
import GitHubProvider from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import prisma from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { registerSidebarItems } from "@/services/sidebarService";

export const authConfig = {
  pages: {
    signIn: "/login",
    signOut: "/logout",
    error: "/error",
  },
  callbacks: {
    async session({ session, token }) {
      if (token && token.sub) {
        session.user.id = token.sub;
      } else {
        throw new Error("Token does not contain sub property");
      }
      return session;
    },
    async jwt({ token, user, trigger }) {
      if (user && user.id && trigger === "signUp") {
        const createUserMenuItemRelations =
          await prisma.userMenuItemRelation.findMany({
            where: { userId: user.id },
          });
        if (createUserMenuItemRelations.length === 0) {
          console.log("Registering default menu for new user");
          await registerSidebarItems(user.id);
        }
      }
      if (!token || !token.sub) {
        throw new Error("Token does not contain sub property");
      }
      return token;
    },

    async signIn({ user, account }) {
      if (user.email && typeof account?.id === "string") {
        try {
          const existingUser = await prisma.user.findUnique({
            where: { email: user.email },
          });

          if (existingUser) {
            await prisma.account.create({
              data: {
                userId: existingUser.id,
                provider: account.provider,
                providerAccountId: account.id,
                type: account.type,
              },
            });
          }
          return true;
        } catch (error) {
          console.error("Error linking account:", error);
          return false;
        }
      }
      return true;
    },
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const parsedCredentials = CredentialsUserScheme.safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;

          const user = await getUserByEmail(email);
          if (!user) {
            throw new Error("User not registered yet. Please sign up.");
          }

          const passwordsMatch =
            user.password && (await bcrypt.compare(password, user.password));
          if (passwordsMatch) return user;
          if (!passwordsMatch) {
            throw new Error("Login failed. Please check your credentials.");
          }
        }
        throw new Error("Login failed. Please check your credentials.");
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
  // https://github.com/nextauthjs/next-auth/discussions/4394
  // jwt when using Credentials authentication.
  session: { strategy: "jwt" },
  secret: process.env.AUTH_SECRET,
} satisfies NextAuthConfig;
