"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin");
  }

  const isLoginPage = pathname === "/admin";

  if (isLoginPage) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-56 bg-white border-r border-gray-200 flex flex-col">
        <div className="px-4 py-5 border-b border-gray-200">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-0.5">
            Portfolio
          </p>
          <h1 className="text-sm font-semibold text-gray-900">CMS Admin</h1>
        </div>

        <nav className="flex-1 p-3 space-y-0.5">
          <NavLink href="/admin/dashboard" current={pathname}>
            Dashboard
          </NavLink>
          <NavLink href="/admin/blogs" current={pathname}>
            Blog Posts
          </NavLink>
          <NavLink href="/admin/projects" current={pathname}>
            Projects
          </NavLink>
        </nav>

        <div className="p-3 border-t border-gray-200">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-2 text-xs text-gray-500 hover:text-gray-700 mb-2"
          >
            <span>↗</span> View Site
          </Link>
          <button
            onClick={handleLogout}
            className="w-full text-left text-xs text-red-500 hover:text-red-700"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 flex flex-col min-h-screen">
        <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
          <h2 className="text-sm font-medium text-gray-700">
            {getPageTitle(pathname)}
          </h2>
          <span className="text-xs text-gray-400">khilan.dev</span>
        </header>
        <div className="flex-1 p-6">{children}</div>
      </main>
    </div>
  );
}

function NavLink({
  href,
  current,
  children,
}: {
  href: string;
  current: string;
  children: React.ReactNode;
}) {
  const active = current === href || current.startsWith(href + "/");
  return (
    <Link
      href={href}
      className={`flex items-center px-3 py-2 text-sm rounded-md transition-colors ${
        active
          ? "bg-gray-100 text-gray-900 font-medium"
          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
      }`}
    >
      {children}
    </Link>
  );
}

function getPageTitle(pathname: string): string {
  if (pathname === "/admin/dashboard") return "Dashboard";
  if (pathname === "/admin/blogs") return "Blog Posts";
  if (pathname === "/admin/blogs/new") return "New Blog Post";
  if (pathname.startsWith("/admin/blogs/")) return "Edit Blog Post";
  if (pathname === "/admin/projects") return "Projects";
  if (pathname === "/admin/projects/new") return "New Project";
  if (pathname.startsWith("/admin/projects/")) return "Edit Project";
  return "Admin";
}
