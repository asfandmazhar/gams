import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  const token = request.cookies.get("token")?.value;

  const isAuthPage = pathname.startsWith("/auth");
  const isProtectedPage =
    pathname.startsWith("/admin") ||
    pathname === "/profile" ||
    pathname === "/subscription";

  if (!token && isProtectedPage) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  if (token && isAuthPage) {
    return NextResponse.redirect(new URL("/profile", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/auth/:path*", "/profile", "/subscription", "/admin/:path*"],
};
