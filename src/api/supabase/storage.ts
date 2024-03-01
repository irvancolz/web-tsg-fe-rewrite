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

export async function uploadToSupabase(file: File, name: string) {
  const splittedName = name.split(".");
  splittedName.splice(splittedName.length - 1, 1);
  const fileExt = name.split(".").splice(-1).join("");
  const newFilename = splittedName.join("") + Date.now() + "." + fileExt;
  const { data, error } = await supabase.storage
    .from(STORAGE)
    .upload(newFilename, file);
  if (error) console.log(error);
  return data as UploadFileResp;
}
