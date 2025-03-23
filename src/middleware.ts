import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

// Define route matchers for better readability
const isPublicRoute = createRouteMatcher(["/"]);
const isOnboardingRoute = createRouteMatcher(["/onboarding"]);
const isPrivateRoute = createRouteMatcher(["/home", "/form"]);

export default clerkMiddleware(async (auth, req: NextRequest) => {
  const { userId, orgId } = await auth();

  // If unauthenticated, redirect users to landing page
  if (!userId) {
    return isPublicRoute(req)
      ? NextResponse.next()
      : NextResponse.redirect(new URL("/", req.url));
  }

  // If authenticated without an organization, redirect to onboarding
  if (!orgId) {
    return isOnboardingRoute(req)
      ? NextResponse.next()
      : NextResponse.redirect(new URL("/onboarding", req.url));
  }

  // If authenticated with an organization, ensure they are on a private routea
  if (!isPrivateRoute(req) && !req.nextUrl.pathname.startsWith("/api")) {
    return NextResponse.redirect(new URL("/home", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
