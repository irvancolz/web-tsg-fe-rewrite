"use client";
import React from "react";
import { BlogEditorContext } from "./context";
import { Editor } from "./editor";
import { Blog } from "@/types";

export function BlogEditor({ data }: { data?: Blog }) {
  return (
    <BlogEditorContext>
      <Editor data={data} />
    </BlogEditorContext>
  );
}
