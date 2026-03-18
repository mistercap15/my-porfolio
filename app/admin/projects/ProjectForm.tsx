"use client";

import { useState } from "react";
import Link from "next/link";

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

interface Props {
  initialData?: Project;
  onSubmit: (data: Project) => void;
  error?: string;
}

const COLOR_OPTIONS = [
  "text-blue",
  "text-green",
  "text-yellow",
  "text-cyan",
  "text-orange",
  "text-purple",
  "text-coral",
];

const BORDER_OPTIONS = [
  "border-blue/30",
  "border-green/30",
  "border-yellow/30",
  "border-cyan/30",
  "border-orange/30",
  "border-purple/30",
];

export default function ProjectForm({ initialData, onSubmit, error }: Props) {
  const isEdit = !!initialData;
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState<Project>(
    initialData ?? {
      id: "",
      name: "",
      title: "",
      description: "",
      tech: [],
      github: "https://github.com/khilanpatel",
      live: "#",
      color: "text-blue",
      borderColor: "border-blue/30",
    }
  );

  const [techInput, setTechInput] = useState(
    (initialData?.tech ?? []).join(", ")
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    const tech = techInput
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);
    await onSubmit({ ...form, tech });
    setSaving(false);
  }

  return (
    <div className="max-w-2xl">
      <div className="flex items-center gap-3 mb-6">
        <Link
          href="/admin/projects"
          className="text-xs text-gray-500 hover:text-gray-900"
        >
          ← Back
        </Link>
        <h2 className="text-lg font-semibold text-gray-900">
          {isEdit ? "Edit Project" : "New Project"}
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <Field label="ID (e.g. 07)">
            <input
              type="text"
              value={form.id}
              onChange={(e) => setForm((f) => ({ ...f, id: e.target.value }))}
              required
              disabled={isEdit}
              className={`${inputClass} font-mono ${isEdit ? "bg-gray-50 text-gray-400" : ""}`}
              placeholder="07"
            />
          </Field>
          <Field label="Name (slug)">
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              required
              className={`${inputClass} font-mono`}
              placeholder="my-project"
            />
          </Field>
        </div>

        <Field label="Title">
          <input
            type="text"
            value={form.title}
            onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
            required
            className={inputClass}
            placeholder="My Project"
          />
        </Field>

        <Field label="Description">
          <textarea
            value={form.description}
            onChange={(e) =>
              setForm((f) => ({ ...f, description: e.target.value }))
            }
            required
            rows={3}
            className={inputClass}
            placeholder="Short project description"
          />
        </Field>

        <Field label="Tech (comma-separated)">
          <input
            type="text"
            value={techInput}
            onChange={(e) => setTechInput(e.target.value)}
            className={inputClass}
            placeholder="React, TypeScript, Node.js"
          />
        </Field>

        <div className="grid grid-cols-2 gap-4">
          <Field label="GitHub URL">
            <input
              type="url"
              value={form.github}
              onChange={(e) =>
                setForm((f) => ({ ...f, github: e.target.value }))
              }
              className={inputClass}
            />
          </Field>
          <Field label="Live URL">
            <input
              type="text"
              value={form.live}
              onChange={(e) => setForm((f) => ({ ...f, live: e.target.value }))}
              className={inputClass}
              placeholder="https://... or #"
            />
          </Field>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Field label="Text Color">
            <select
              value={form.color}
              onChange={(e) =>
                setForm((f) => ({ ...f, color: e.target.value }))
              }
              className={inputClass}
            >
              {COLOR_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Border Color">
            <select
              value={form.borderColor}
              onChange={(e) =>
                setForm((f) => ({ ...f, borderColor: e.target.value }))
              }
              className={inputClass}
            >
              {BORDER_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </Field>
        </div>

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
            {saving
              ? "Saving..."
              : isEdit
              ? "Update Project"
              : "Create Project"}
          </button>
          <Link
            href="/admin/projects"
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
