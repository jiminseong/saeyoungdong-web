import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";

const handleI18nRouting = createMiddleware(routing);

export default function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = `/${routing.defaultLocale}`;

    const response = NextResponse.rewrite(url);
    response.cookies.set("NEXT_LOCALE", routing.defaultLocale, {
      path: "/",
      sameSite: "lax",
    });

    return response;
  }

  return handleI18nRouting(request);
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: ["/", "/(ko|en|zh)/:path*", "/((?!api|_next|_vercel|.*\\..*).*)"],
};
