import { Blog, Categories } from "@/types";
import { supabase } from "./supabase";

const BLOG_TABLE = "tsg_blog";
const BLOG_CATEGORIES_TABLE = "tsg_blog_categories";
const CATEGORIES_TABLE = "tsg_categories";

export async function getAllBlog() {
  const { data, error } = await supabase
    .from(BLOG_TABLE)
    .select(`*, ${BLOG_CATEGORIES_TABLE}(${CATEGORIES_TABLE}(*))`)
    .order("created_at", { ascending: false });
  if (error) console.log(error.message);
  return data as Blog[];
}

export async function getBlog(name: string) {
  const { data, error } = await supabase
    .from(BLOG_TABLE)
    .select(`*, ${BLOG_CATEGORIES_TABLE}(${CATEGORIES_TABLE}(*))`)
    .eq("title", name)
    .single();

  if (error) console.log(error.message);
  return data as Blog;
}

export async function getAllCategories() {
  const { data, error } = await supabase.from(CATEGORIES_TABLE).select(`*`);
  if (error) console.log(error.message);

  return data as Categories[];
}

export async function getAllBlogWithCategories(category: string) {
  const { data, error } = await supabase
    .from(CATEGORIES_TABLE)
    .select(
      `name, ${BLOG_CATEGORIES_TABLE}(${BLOG_TABLE}(*, ${BLOG_CATEGORIES_TABLE}(${CATEGORIES_TABLE}(*))))`
    )
    .eq("name", category)
    .single();
  if (error) console.log(error.message);
  const result: Blog[] = [];

  data?.tsg_blog_categories?.forEach((i) => {
    result.push(i.tsg_blog as unknown as Blog);
  });

  return result.sort((a, b) => {
    return Date.parse(b.created_at) - Date.parse(a.created_at);
  });
}
