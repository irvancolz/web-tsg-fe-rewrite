import { supabase } from "./supabase";

const STORAGE = "tsg-blog-assets";

export function getSupabasePublicUrl(path: string) {
  if (!path) return "";
  const {
    data: { publicUrl },
  } = supabase.storage.from(STORAGE).getPublicUrl(path);
  return publicUrl;
}