"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import BlogForm from "../BlogForm";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  accent: string;
  content: string;
}

export default function EditBlog() {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug as string;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/blogs")
      .then((r) => r.json())
      .then((posts: BlogPost[]) => {
        const found = posts.find((p) => p.slug === slug);
        if (found) setPost(found);
      });
  }, [slug]);

  async function handleSubmit(data: object) {
    const res = await fetch(`/api/blogs/${slug}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      router.push("/admin/blogs");
    } else {
      const json = await res.json();
      setError(json.error || "Failed to update post");
    }
  }

  if (!post) return <p className="text-sm text-gray-500">Loading...</p>;

  return <BlogForm initialData={post} onSubmit={handleSubmit} error={error} />;
}
