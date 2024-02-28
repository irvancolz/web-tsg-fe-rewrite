import { getSupabasePublicUrl } from "@/api/supabase";

export function getDynamicAssetsUrl(url: string): string {
  if (!url.startsWith("http") && !url.startsWith("blob"))
    return getSupabasePublicUrl(url);
  return url;
}
