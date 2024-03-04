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
  return data as unknown as Blog[];
}

export async function getBlog(name: string) {
  const { data, error } = await supabase
    .from(BLOG_TABLE)
    .select(`*, ${BLOG_CATEGORIES_TABLE}(${CATEGORIES_TABLE}(*))`)
    .ilike("title", `%${name}%`)
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

export async function uploadBlog(
  blog: Omit<Blog, "tsg_blog_categories" | "created_at" | "updated_at" | "id">
) {
  const { error, data } = await supabase
    .from(BLOG_TABLE)
    .insert(blog)
    .select()
    .single();
  if (error) console.log(error);

  return data;
}

export async function updateBlog(
  blog: Omit<Blog, "tsg_blog_categories" | "created_at" | "updated_at" | "id">,
  id: number
) {
  const { error, data } = await supabase
    .from(BLOG_TABLE)
    .update(blog)
    .eq("id", id)
    .select()
    .single();
  if (error) console.log(error);

  return data;
}

export async function getCategoriesByBlog(blog_id: number) {
  const { data, error } = await supabase
    .from(CATEGORIES_TABLE)
    .select("*")
    .eq("blog_id", blog_id);

  if (error) console.log(error);

  return data;
}

export async function deleteBlogCategory(
  category_id: number[],
  blog_id: number
) {
  const { error } = await supabase
    .from(BLOG_CATEGORIES_TABLE)
    .delete()
    .eq("blog_id", blog_id)
    .in("category_id", category_id);

  if (error) console.log(error);
}

export async function addBlogCategory(category_id: number[], blog_id: number) {
  const newRecord = category_id.map((item) => {
    return { blog_id, category_id: item };
  });
  const { data, error, count } = await supabase
    .from(BLOG_CATEGORIES_TABLE)
    .insert(newRecord);
  if (error) console.log(error);
  return count;
}
