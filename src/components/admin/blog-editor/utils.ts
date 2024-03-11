import {
  addBlogCategory,
  deleteBlogCategory,
  uploadToSupabase,
} from "@/api/supabase";
import { BlogContent } from "@/types";
import { getLocalFile, isExtAllowed } from "@/utils";

export async function uploadNewFile(content: BlogContent[]) {
  const contentWitheNewFile = content.filter(
    (item) => item.type == "img" && item.content.startsWith("blob")
  );

  let contentWithNewFilePath: BlogContent[] = [];

  for (const item of contentWitheNewFile) {
    if (!isExtAllowed(item.props?.extensions!)) continue;
    const file = await getLocalFile(item.content, item.props?.name!);
    const uploadRes = await uploadToSupabase(file, item.props?.name!);
    URL.revokeObjectURL(item.content);
    const newContent: BlogContent = {
      content: uploadRes.path,
      id: item.id,
      type: item.type,
      props: item.props,
    };
    contentWithNewFilePath.push(newContent);
  }
  return contentWithNewFilePath;
}

export async function updateBlogCategories({
  newCategory,
  blog_id,
  baseCategory = [],
}: {
  newCategory: number[];
  baseCategory?: number[];
  blog_id: number;
}) {
  if (!blog_id) {
    console.error("failed to update blog categories : empty blog target");
    return;
  }

  if (baseCategory.length == 0) {
    return await addBlogCategory(newCategory, blog_id);
  }

  const newCategories = newCategory.filter((n) => !baseCategory.includes(n));
  const deletedCategories = baseCategory.filter((b) => newCategory.includes(b));

  await addBlogCategory(newCategories, blog_id);
  await deleteBlogCategory(deletedCategories, blog_id);
}
