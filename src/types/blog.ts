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
  "code",
  "list",
];

export type BlogContentType = "text" | "heading" | "img" | "code" | "list";

export type BlogImageProps = {
  name?: string;
  size?: number;
  extensions?: string;
  url?: string;
};

export type BlogContent<T = BlogImageProps> = {
  id: string;
  type: BlogContentType;
  // update to more dynamic types in the future
  content: string;
  props?: T;
};
