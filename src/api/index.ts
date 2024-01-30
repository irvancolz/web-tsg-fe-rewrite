import { Blog, Categories } from "@/types";

const domain = process.env.NEXT_PUBLIC_DOMAIN;

export async function getAllBlog(): Promise<Blog[]> {
  const req = await fetch(`${domain}/blog`);
  const res = await req.json();
  return res.results;
}

export async function getAllCategories(): Promise<Categories[]> {
  const req = await fetch(`${domain}/blog/categories`);
  const res = await req.json();
  return res.data;
}
