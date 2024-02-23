import { BlogContent } from "@/types";
import React from "react";
import { BlogText } from ".";

export function BlogContent({ type, content }: BlogContent) {
  return <BlogText content={content as string} />;
}
