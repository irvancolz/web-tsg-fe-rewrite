"use client";
import { BlogContent } from "@/types";
import React, { ReactNode, createContext, useContext, useState } from "react";

export type BlogEditorInterface = {
  title: string;
  content: BlogContent[];
  attachment: string;
  categories: string[];
  setCategories: (a: string[]) => void;
  setContent: (b: BlogContent[]) => void;
  setTitle: (b: string) => void;
  setAttachment: (b: string) => void;
  updateContent: (c: BlogContent) => void;
  save: () => void;
};

const BlogEditor = createContext<BlogEditorInterface>(
  {} as BlogEditorInterface
);

export function useBlogEditor() {
  return useContext(BlogEditor);
}

export function BlogEditorContext({ children }: { children: ReactNode }) {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<BlogContent[]>([]);
  const [attachment, setAttachment] = useState<string>("");
  const [categories, setCategories] = useState<string[]>([]);

  function updateContent(a: BlogContent) {
    const el = content.find((b) => a.id == b.id);
    if (!el) {
      setContent((prev) => [...prev, a]);
      return;
    }

    const idx = content.indexOf(el);
    const newContent = content;
    newContent[idx] = a;

    setContent(() => newContent);
  }

  function save() {
    console.log({
      attachment,
      title,
      content,
      categories,
    });
  }

  return (
    <BlogEditor.Provider
      value={{
        title,
        setTitle,
        categories,
        setCategories,
        attachment,
        setAttachment,
        updateContent,
        content,
        setContent,
        save,
      }}
    >
      {children}
    </BlogEditor.Provider>
  );
}
