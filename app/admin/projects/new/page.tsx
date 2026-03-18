"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ProjectForm from "../ProjectForm";

export default function NewProject() {
  const router = useRouter();
  const [error, setError] = useState("");

  async function handleSubmit(data: object) {
    const res = await fetch("/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      router.push("/admin/projects");
    } else {
      const json = await res.json();
      setError(json.error || "Failed to create project");
    }
  }

  return <ProjectForm onSubmit={handleSubmit} error={error} />;
}
