"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function AdminDashboard() {
  const [blogCount, setBlogCount] = useState<number | null>(null);
  const [projectCount, setProjectCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/blogs")
      .then((r) => r.json())
      .then((d) => setBlogCount(d.length))
      .catch(() => setBlogCount(0));

    fetch("/api/projects")
      .then((r) => r.json())
      .then((d) => setProjectCount(d.length))
      .catch(() => setProjectCount(0));
  }, []);

  return (
    <div className="max-w-3xl">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Overview</h2>
        <p className="text-sm text-gray-500 mt-1">
          Manage your portfolio content below.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <StatCard
          label="Blog Posts"
          count={blogCount}
          href="/admin/blogs"
          action="Manage Posts"
        />
        <StatCard
          label="Projects"
          count={projectCount}
          href="/admin/projects"
          action="Manage Projects"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <QuickLink href="/admin/blogs/new" label="New Blog Post" />
        <QuickLink href="/admin/projects/new" label="New Project" />
      </div>
    </div>
  );
}

function StatCard({
  label,
  count,
  href,
  action,
}: {
  label: string;
  count: number | null;
  href: string;
  action: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5">
      <p className="text-xs text-gray-500 uppercase tracking-wider">{label}</p>
      <p className="text-3xl font-bold text-gray-900 mt-2">
        {count === null ? "—" : count}
      </p>
      <Link
        href={href}
        className="text-xs text-gray-500 hover:text-gray-900 mt-3 inline-block transition-colors"
      >
        {action} →
      </Link>
    </div>
  );
}

function QuickLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="flex items-center justify-center gap-2 bg-gray-900 text-white text-sm font-medium rounded-xl py-3 hover:bg-gray-700 transition-colors"
    >
      <span>+</span> {label}
    </Link>
  );
}
