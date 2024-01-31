export type Blog = {
  id: number;
  title: string;
  attachment: string;
  content: string;
  created_at: string;
  updated_at: string;
  // reminder: update this props when migrate to new db
  tsg_blog_categories: { tsg_categories: Categories }[];
};

// export type Blog = {
//   categories: string[];
// } & Omit<BlogDetail, "updated_at" | "created_at" | "categories">;

export type Categories = {
  id: number;
  name: string;
  created_at: string;
  updated_at?: string;
};
