export type Blog = {
  id: number;
  title: string;
  attachment: string;
  content: BlogContent[];
  created_at: string;
  updated_at: string;
  // reminder: update this props when migrate to new db
  tsg_blog_categories: { tsg_categories: Categories }[];
};

export type Categories = {
  id: number;
  name: string;
  created_at: string;
  updated_at?: string;
};

export const BlogContentTypeFlag: BlogContentType[] = [
  "text",
  "heading",
  "img",
  "list",
];

export type BlogContentType = "text" | "heading" | "img" | "list";

export type BlogContent = {
  id: string;
  type: BlogContentType;
  // update to more dynamic types in the future
  content: string | string[];
};
