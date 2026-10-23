import { SignJWT, jwtVerify } from "jose";

export const SESSION_COOKIE = "admin_session";

function getSecret(): Uint8Array {
    const secret = process.env.ADMIN_SESSION_SECRET;
    if (!secret) {
          throw new Error(
                  "ADMIN_SESSION_SECRET is not set. Add it as an environment variable in your Vercel project settings."
                );
    }
    return new TextEncoder().encode(secret);
}

export async function createSessionToken(username: string): Promise<string> {
    return await new SignJWT({ username })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("7d")
      .sign(getSecret());
}

export async function verifySessionToken(token: string): Promise<{ username: string } | null> {
    try {
          const { payload } = await jwtVerify(token, getSecret());
          return { username: String(payload.username) };
    } catch {
          return null;
    }
}
