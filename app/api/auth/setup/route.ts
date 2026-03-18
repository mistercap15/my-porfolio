import { NextRequest, NextResponse } from "next/server";
import { userExists, createUser } from "../../../../lib/data";
import { hashPassword } from "../../../../lib/auth";

// Creates the first admin user. Returns 409 if an admin already exists.
export async function POST(request: NextRequest) {
  if (await userExists()) {
    return NextResponse.json(
      { error: "Admin user already configured" },
      { status: 409 }
    );
  }

  const { username, password } = await request.json();

  if (!username || !password || password.length < 8) {
    return NextResponse.json(
      { error: "Username required and password must be at least 8 characters" },
      { status: 400 }
    );
  }

  const passwordHash = await hashPassword(password);
  await createUser({ username, passwordHash });

  return NextResponse.json({ success: true });
}
