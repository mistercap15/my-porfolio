import { NextRequest, NextResponse } from "next/server";
import { readBlogs, writeBlogs, BlogPost } from "../../../lib/data";

function isAuthed(request: NextRequest): boolean {
  const session = request.cookies.get("admin_session");
  return session?.value === process.env.SESSION_SECRET;
}

export async function GET() {
  const posts = await readBlogs();
  return NextResponse.json(posts);
}

export async function POST(request: NextRequest) {
  if (!isAuthed(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const newPost: BlogPost = await request.json();
  const posts = await readBlogs();

  if (posts.find((p) => p.slug === newPost.slug)) {
    return NextResponse.json({ error: "Slug already exists" }, { status: 400 });
  }

  await writeBlogs([...posts, newPost]);
  return NextResponse.json(newPost, { status: 201 });
}
