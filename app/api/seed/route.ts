import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { writeBlogs, writeProjects, BlogPost, Project } from "../../../lib/data";

function isAuthed(request: NextRequest): boolean {
  const session = request.cookies.get("admin_session");
  return session?.value === process.env.SESSION_SECRET;
}

export async function POST(request: NextRequest) {
  if (!isAuthed(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const blogsPath = path.join(process.cwd(), "data", "blogs.json");
  const projectsPath = path.join(process.cwd(), "data", "projects.json");

  const blogs: BlogPost[] = JSON.parse(fs.readFileSync(blogsPath, "utf-8"));
  const projects: Project[] = JSON.parse(fs.readFileSync(projectsPath, "utf-8"));

  await writeBlogs(blogs);
  await writeProjects(projects);

  return NextResponse.json({
    success: true,
    seeded: { blogs: blogs.length, projects: projects.length },
  });
}
