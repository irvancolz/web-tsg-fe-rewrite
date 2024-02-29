import { UploadFileResp } from "@/types/storage";
import { supabase } from "./supabase";

const STORAGE = "tsg-blog-assets";

export function getSupabasePublicUrl(path: string): string {
  if (!path) return "";
  const {
    data: { publicUrl },
  } = supabase.storage.from(STORAGE).getPublicUrl(path);
  return publicUrl;
}

export async function uploadToSupabase(url: string): Promise<UploadFileResp> {
  const fileName = url.split("/").splice(-1).join("");
  const { data, error } = await supabase.storage
    .from(STORAGE)
    .upload(fileName, url);
  if (error) console.log(error);
  return data as UploadFileResp;
}
