import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from "@/routes";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isAuthorized = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) {
    return;
  }

  if (isAuthRoute) {
    if (isAuthorized) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return;
  }

  if (!isAuthorized && !isPublicRoute) {
    let callbackUrl = nextUrl.pathname;

    if (nextUrl.search) {
      callbackUrl += nextUrl.search;
    }

    const encodedCallbackUrl = encodeURIComponent(callbackUrl);

    return Response.redirect(
      new URL(`/login?callbackUrl=${encodedCallbackUrl}`, nextUrl)
    );
  }

  return;
});

export const config = {
  // https://nextjs.org/learn/dashboard-app/adding-authentication
  // matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
  // https://clerk.com/docs/references/nextjs/auth-middleware
  // matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],

  // 1.Include authentication endpoints (/api/auth/*).
  // 2.Exclude static files (e.g., /_next/static, /_next/image) and specific file types (e.g., .png).
  matcher: ["/((?!.+\\.[\\w]+$|_next/static|_next/image).*)", "/api/auth/(.*)"],
};
