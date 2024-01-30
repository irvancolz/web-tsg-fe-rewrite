import { Blog, BlogDetail, Categories } from "@/types";

const domain = process.env.NEXT_PUBLIC_DOMAIN;

export async function getAllBlog(category: string = ""): Promise<Blog[]> {
  let url = "/blog";

  // if (category) {
  //   url += `/get-by-category-id/${category}`;
  // }

  const req = await fetch(`${domain}${url}`);
  const res = await req.json();
  return res.results;
}

export async function getBlog(title: string): Promise<BlogDetail> {
  const req = await fetch(`${domain}/blog/${title}`);
  const res = await req.json();
  return res.data;
}

export async function getAllCategories(): Promise<Categories[]> {
  const req = await fetch(`${domain}/blog/categories`);
  const res = await req.json();
  return res.data;
}
