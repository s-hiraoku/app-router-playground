import type { NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { CredentialsUserScheme } from "./schemes";
import { getUserByEmail } from "@/db/user";
import GitHubProvider from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import prisma from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { registerSidebarItems } from "@/services/sidebarService";

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
    async jwt({ token, user, trigger }) {
      if (user && user.id) {
        if (trigger === "signUp") {
          console.log("Registering default menu for new user");
          await registerSidebarItems(user.id);
        }
      }
      if (!token || !token.sub) {
        throw new Error("Token does not contain sub property");
      }

      return token;
    },
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
  session: { strategy: "jwt" },
  secret: process.env.AUTH_SECRET,
} satisfies NextAuthConfig;
