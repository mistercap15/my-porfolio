import clientPromise from "./mongodb";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  accent: string;
  content: string;
}

export interface Project {
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

const DB = "portfolio";

export interface AdminUser {
  username: string;
  passwordHash: string;
}

export async function findUser(username: string): Promise<AdminUser | null> {
  const client = await clientPromise;
  const doc = await client
    .db(DB)
    .collection("users")
    .findOne({ username }, { projection: { _id: 0 } });
  return doc as unknown as AdminUser | null;
}

export async function createUser(user: AdminUser): Promise<void> {
  const client = await clientPromise;
  await client.db(DB).collection("users").insertOne(user as never);
}

export async function userExists(): Promise<boolean> {
  const client = await clientPromise;
  const count = await client.db(DB).collection("users").countDocuments();
  return count > 0;
}

export async function readBlogs(): Promise<BlogPost[]> {
  const client = await clientPromise;
  const docs = await client
    .db(DB)
    .collection("blogs")
    .find({}, { projection: { _id: 0 } })
    .toArray();
  return docs as unknown as BlogPost[];
}

export async function writeBlogs(posts: BlogPost[]): Promise<void> {
  const client = await clientPromise;
  const col = client.db(DB).collection("blogs");
  await col.deleteMany({});
  if (posts.length > 0) await col.insertMany(posts as never[]);
}

export async function readProjects(): Promise<Project[]> {
  const client = await clientPromise;
  const docs = await client
    .db(DB)
    .collection("projects")
    .find({}, { projection: { _id: 0 } })
    .toArray();
  return docs as unknown as Project[];
}

export async function writeProjects(projects: Project[]): Promise<void> {
  const client = await clientPromise;
  const col = client.db(DB).collection("projects");
  await col.deleteMany({});
  if (projects.length > 0) await col.insertMany(projects as never[]);
}
