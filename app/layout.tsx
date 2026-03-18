import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://khilan.dev"),
  title: {
    default: "Khilan Patel — Software Engineer",
    template: "%s | Khilan Patel",
  },
  description:
    "Passionate React.js developer building high-performance web and mobile applications. Specializing in React, Next.js, Vue.js, and React Native.",
  keywords: [
    "React",
    "Next.js",
    "TypeScript",
    "Vue.js",
    "React Native",
    "Software Engineer",
    "Frontend Developer",
    "Web Developer",
    "Ireland",
  ],
  authors: [{ name: "Khilan Patel", url: "https://khilan.dev" }],
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://khilan.dev",
    title: "Khilan Patel — Software Engineer",
    description:
      "Passionate React.js developer building high-performance web and mobile applications. Specializing in React, Next.js, Vue.js, and React Native.",
    siteName: "Khilan Patel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khilan Patel — Software Engineer",
    description:
      "Passionate React.js developer building high-performance web and mobile applications.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://khilan.dev",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Khilan Patel",
  url: "https://khilan.dev",
  jobTitle: "Software Engineer",
  description:
    "Passionate React.js developer building high-performance web and mobile applications.",
  knowsAbout: ["React", "Next.js", "TypeScript", "Vue.js", "React Native"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="font-mono antialiased">{children}</body>
    </html>
  );
}
