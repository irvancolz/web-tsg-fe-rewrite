import { BlogContent } from "@/types";
import React from "react";
import { BlogHeading, BlogText } from ".";

export function BlogContent({ type, content }: BlogContent) {
  if (type == "heading") return <BlogHeading content={content as string} />;
  return <BlogText content={content as string} />;
}
