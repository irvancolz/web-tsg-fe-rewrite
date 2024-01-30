export type Blog = {
  id: number;
  title: string;
  attachment: string;
  content: string;
  Categories: string[];
};

export type Categories = {
  id: number;
  CategoryName: string;
  createdAt: string;
  updatedAt: string;
};
