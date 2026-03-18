import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only protect /admin/* but not /admin (login page)
  if (pathname.startsWith("/admin/")) {
    const session = request.cookies.get("admin_session");
    const secret = process.env.SESSION_SECRET;

    if (!session || session.value !== secret) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path+"],
};
