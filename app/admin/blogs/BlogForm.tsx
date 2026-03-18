"use client";

import { useState } from "react";
import Link from "next/link";

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

interface Props {
  initialData?: BlogPost;
  onSubmit: (data: BlogPost) => void;
  error?: string;
}

const ACCENT_OPTIONS = [
  "border-orange",
  "border-cyan",
  "border-coral",
  "border-electric",
  "border-green",
  "border-blue",
  "border-purple",
];

function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

export default function BlogForm({ initialData, onSubmit, error }: Props) {
  const isEdit = !!initialData;
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState<BlogPost>(
    initialData ?? {
      slug: "",
      title: "",
      excerpt: "",
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      readTime: "5 min read",
      tags: [],
      accent: "border-orange",
      content: "",
    }
  );

  const [tagsInput, setTagsInput] = useState(
    (initialData?.tags ?? []).join(", ")
  );

  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const title = e.target.value;
    setForm((f) => ({
      ...f,
      title,
      slug: isEdit ? f.slug : slugify(title),
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    const tags = tagsInput
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);
    await onSubmit({ ...form, tags });
    setSaving(false);
  }

  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-3 mb-6">
        <Link
          href="/admin/blogs"
          className="text-xs text-gray-500 hover:text-gray-900"
        >
          ← Back
        </Link>
        <h2 className="text-lg font-semibold text-gray-900">
          {isEdit ? "Edit Post" : "New Post"}
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <Field label="Title">
          <input
            type="text"
            value={form.title}
            onChange={handleTitleChange}
            required
            className={inputClass}
            placeholder="Post title"
          />
        </Field>

        <Field label="Slug">
          <input
            type="text"
            value={form.slug}
            onChange={(e) => setForm((f) => ({ ...f, slug: e.target.value }))}
            required
            className={`${inputClass} font-mono`}
            placeholder="post-slug"
          />
        </Field>

        <Field label="Excerpt">
          <textarea
            value={form.excerpt}
            onChange={(e) => setForm((f) => ({ ...f, excerpt: e.target.value }))}
            required
            rows={2}
            className={inputClass}
            placeholder="Short description shown in the blog list"
          />
        </Field>

        <div className="grid grid-cols-2 gap-4">
          <Field label="Date">
            <input
              type="text"
              value={form.date}
              onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
              required
              className={inputClass}
              placeholder="Mar 2, 2026"
            />
          </Field>
          <Field label="Read Time">
            <input
              type="text"
              value={form.readTime}
              onChange={(e) =>
                setForm((f) => ({ ...f, readTime: e.target.value }))
              }
              required
              className={inputClass}
              placeholder="5 min read"
            />
          </Field>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Field label="Tags (comma-separated)">
            <input
              type="text"
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              className={inputClass}
              placeholder="React, TypeScript"
            />
          </Field>
          <Field label="Accent Color">
            <select
              value={form.accent}
              onChange={(e) =>
                setForm((f) => ({ ...f, accent: e.target.value }))
              }
              className={inputClass}
            >
              {ACCENT_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <Field label="Content (Markdown)">
          <textarea
            value={form.content}
            onChange={(e) =>
              setForm((f) => ({ ...f, content: e.target.value }))
            }
            required
            rows={20}
            className={`${inputClass} font-mono text-xs`}
            placeholder="Write your post content in Markdown..."
          />
        </Field>

        {error && (
          <p className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
            {error}
          </p>
        )}

        <div className="flex gap-3">
          <button
            type="submit"
            disabled={saving}
            className="px-5 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-700 disabled:opacity-50 transition-colors"
          >
            {saving ? "Saving..." : isEdit ? "Update Post" : "Create Post"}
          </button>
          <Link
            href="/admin/blogs"
            className="px-5 py-2 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-xs font-medium text-gray-700 mb-1.5">
        {label}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  "w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent bg-white";
