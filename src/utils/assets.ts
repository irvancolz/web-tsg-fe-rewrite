import { getSupabasePublicUrl } from "@/api/supabase";

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
