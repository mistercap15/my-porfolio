import { NextRequest, NextResponse } from "next/server";
import { readBlogs, writeBlogs, BlogPost } from "../../../../lib/data";

function isAuthed(request: NextRequest): boolean {
  const session = request.cookies.get("admin_session");
  return session?.value === process.env.SESSION_SECRET;
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  if (!isAuthed(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slug } = await params;
  const updated: BlogPost = await request.json();
  const posts = await readBlogs();
  const index = posts.findIndex((p) => p.slug === slug);

  if (index === -1) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  posts[index] = updated;
  await writeBlogs(posts);
  return NextResponse.json(updated);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  if (!isAuthed(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slug } = await params;
  const posts = await readBlogs();
  const filtered = posts.filter((p) => p.slug !== slug);

  if (filtered.length === posts.length) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  await writeBlogs(filtered);
  return NextResponse.json({ success: true });
}
