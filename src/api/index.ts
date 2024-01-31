import { Blog, Categories } from "@/types";

const domain = process.env.NEXT_PUBLIC_DOMAIN;

export async function getAllBlog(category: string = ""): Promise<Blog[]> {
  let url = "/blog";

  const req = await fetch(`${domain}${url}`);
  const res = await req.json();
  return res.results;
}

export async function getBlog(title: string): Promise<Blog> {
  const req = await fetch(`${domain}/blog/${title}`);
  const res = await req.json();
  return res.data;
}

export async function getAllCategories(): Promise<Categories[]> {
  const req = await fetch(`${domain}/blog/categories`);
  const res = await req.json();
  return res.data;
}
