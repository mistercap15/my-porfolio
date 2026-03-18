import { NextRequest, NextResponse } from "next/server";
import { readProjects, writeProjects, Project } from "../../../../lib/data";

function isAuthed(request: NextRequest): boolean {
  const session = request.cookies.get("admin_session");
  return session?.value === process.env.SESSION_SECRET;
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isAuthed(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const updated: Project = await request.json();
  const projects = await readProjects();
  const index = projects.findIndex((p) => p.id === id);

  if (index === -1) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }

  projects[index] = updated;
  await writeProjects(projects);
  return NextResponse.json(updated);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isAuthed(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const projects = await readProjects();
  const filtered = projects.filter((p) => p.id !== id);

  if (filtered.length === projects.length) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }

  await writeProjects(filtered);
  return NextResponse.json({ success: true });
}
