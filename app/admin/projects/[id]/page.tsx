"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import ProjectForm from "../ProjectForm";

interface Project {
  id: string;
  name: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  color: string;
  borderColor: string;
}

export default function EditProject() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  const [project, setProject] = useState<Project | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/projects")
      .then((r) => r.json())
      .then((projects: Project[]) => {
        const found = projects.find((p) => p.id === id);
        if (found) setProject(found);
      });
  }, [id]);

  async function handleSubmit(data: object) {
    const res = await fetch(`/api/projects/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      router.push("/admin/projects");
    } else {
      const json = await res.json();
      setError(json.error || "Failed to update project");
    }
  }

  if (!project) return <p className="text-sm text-gray-500">Loading...</p>;

  return <ProjectForm initialData={project} onSubmit={handleSubmit} error={error} />;
}
