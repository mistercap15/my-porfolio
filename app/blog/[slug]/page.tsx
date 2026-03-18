import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { readBlogs } from "../../../lib/data";
import BlogPostContent from "../../components/BlogPostContent";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = (await readBlogs()).find((p) => p.slug === slug);

  if (!post) {
    return { title: "Post Not Found | Khilan Patel" };
  }

  return {
    title: `${post.title} | Khilan Patel`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://khilan.dev/blog/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = (await readBlogs()).find((p) => p.slug === slug);

  if (!post) notFound();

  return <BlogPostContent post={post} />;
}
