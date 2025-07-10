import { NextResponse } from "next/server";

export function middleware(req) {
  const { pathname } = req.nextUrl;

  if (process.env.NODE_ENV === "production" && pathname.startsWith("/admin")) {
    const authHeader = req.headers.get("authorization");

    const username = process.env.BASIC_AUTH_USER;
    const password = process.env.BASIC_AUTH_PASS;

    const encoded = Buffer.from(`${username}:${password}`).toString("base64");
    const expectedAuth = `Basic ${encoded}`;

    if (authHeader !== expectedAuth) {
      return new NextResponse("Unauthorized", {
        status: 401,
        headers: {
          "WWW-Authenticate": 'Basic realm="Secure Area"',
        },
      });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
