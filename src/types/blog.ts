export type BlogDetail = {
  id: number;
  title: string;
  attachment: string;
  content: string;
  Categories: { id: number; CategoryName: string }[];
  createdAt: string;
  updatedAt: string;
};

export type Blog = {
  Categories: string[];
} & Omit<BlogDetail, "updatedAt" | "createdAt" | "Categories">;

export type Categories = {
  id: number;
  CategoryName: string;
  createdAt: string;
  updatedAt: string;
};
