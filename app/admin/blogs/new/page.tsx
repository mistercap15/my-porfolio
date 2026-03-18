"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import BlogForm from "../BlogForm";

export default function NewBlog() {
  const router = useRouter();
  const [error, setError] = useState("");

  async function handleSubmit(data: object) {
    const res = await fetch("/api/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      router.push("/admin/blogs");
    } else {
      const json = await res.json();
      setError(json.error || "Failed to create post");
    }
  }

  return <BlogForm onSubmit={handleSubmit} error={error} />;
}
