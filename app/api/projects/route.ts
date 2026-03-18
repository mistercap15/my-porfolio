import { NextRequest, NextResponse } from "next/server";
import { readProjects, writeProjects, Project } from "../../../lib/data";

function isAuthed(request: NextRequest): boolean {
  const session = request.cookies.get("admin_session");
  return session?.value === process.env.SESSION_SECRET;
}

export async function GET() {
  const projects = await readProjects();
  return NextResponse.json(projects);
}

export async function POST(request: NextRequest) {
  if (!isAuthed(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const newProject: Project = await request.json();
  const projects = await readProjects();

  await writeProjects([...projects, newProject]);
  return NextResponse.json(newProject, { status: 201 });
}
