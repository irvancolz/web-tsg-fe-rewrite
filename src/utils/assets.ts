import { getSupabasePublicUrl } from "@/api/supabase";

export function getDynamicAssetsUrl(url: string): string {
  if (!url.startsWith("../")) return getSupabasePublicUrl(url);
  return url;
}
