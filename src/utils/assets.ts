import { getSupabasePublicUrl } from "@/api/supabase";
import { BlogImageProps } from "@/types";
import { ALLOWED_EXT_TO_UPLOAD } from "@/types/storage";

export function getDynamicAssetsUrl(url: string): string {
  if (!url.startsWith("http") && !url.startsWith("blob"))
    return getSupabasePublicUrl(url);
  return url;
}

export async function getLocalFile(url: string, filename: string) {
  const resp = await fetch(url);
  const blob = await resp.blob();
  const file = new File([blob], filename);
  return file;
}

export function recordFileData(file: File): BlogImageProps {
  return {
    extensions: file.name.split(".").splice(-1).join(""),
    name: file.name,
    size: file.size,
    url: URL.createObjectURL(file),
  };
}

export function isExtAllowed(ext: string) {
  return ALLOWED_EXT_TO_UPLOAD.some((el) => el == ext);
}
