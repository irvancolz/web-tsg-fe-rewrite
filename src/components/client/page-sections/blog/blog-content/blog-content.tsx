import { BlogContent as BlogContentType } from "@/types";
import React from "react";
import { BlogCode, BlogHeading, BlogText } from ".";
import { BlogImg } from "./blog-img";

export function BlogContent({ type, content }: BlogContentType) {
  if (type == "heading") return <BlogHeading content={content as string} />;
  if (type == "img") return <BlogImg src={content} alt={content} />;
  if (type == "code") return <BlogCode content={content} />;
  return <BlogText content={content as string} />;
}
