import { NextRequest, NextResponse } from "next/server";
import { createSessionToken, SESSION_COOKIE } from "@/app/lib/adminAuth";

export async function POST(req: NextRequest) {
    let body: { username?: string; password?: string };
    try {
          body = await req.json();
    } catch {
          return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }

  const { username, password } = body;

  const validUser = process.env.ADMIN_USERNAME || "admin";
    const validPass = process.env.ADMIN_PASSWORD;

  if (!validPass) {
        return NextResponse.json(
          { error: "Admin login is not configured yet. Set ADMIN_PASSWORD on the server." },
          { status: 500 }
              );
  }

  if (!username || !password || username !== validUser || password !== validPass) {
        return NextResponse.json({ error: "Invalid username or password." }, { status: 401 });
  }

  const token = await createSessionToken(username);
    const res = NextResponse.json({ ok: true });
    res.cookies.set(SESSION_COOKIE, token, {
          httpOnly: true,
          secure: true,
          sameSite: "lax",
          path: "/",
          maxAge: 60 * 60 * 24 * 7,
    });
    return res;
}
