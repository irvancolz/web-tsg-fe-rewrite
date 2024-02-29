"use client";
import { BlogContent } from "@/types";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

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
  deleteContent: (c: BlogContent) => void;
  save: () => void;
};

const BlogEditor = createContext<BlogEditorInterface>(
  {} as BlogEditorInterface
);

export function useBlogEditor() {
  return useContext(BlogEditor);
}

export function BlogEditorContext({ children }: { children: ReactNode }) {
  const [title, setTitles] = useState<string>("");
  const [content, setContents] = useState<BlogContent[]>([]);
  const [attachment, setAttachments] = useState<string>("");
  const [categories, setCategoriess] = useState<string[]>([]);

  function setTitle(a: string) {
    return setTitles(() => a);
  }

  function deleteContent(a: BlogContent) {
    const newData = content.filter((el) => el.id != a.id);
    setContents(() => newData);
  }

  function setContent(a: BlogContent[]) {
    return setContents(() => a);
  }

  function setAttachment(a: string) {
    return setAttachments(() => a);
  }

  function setCategories(a: string[]) {
    return setCategoriess(() => a);
  }

  function updateContent(a: BlogContent) {
    const el = content.find((b) => a.id == b.id);
    if (!el) {
      setContents((prev) => [...prev, a]);
      return;
    }

    const idx = content.indexOf(el);
    const newContent = content;
    newContent[idx] = a;
    setContents(() => newContent);
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
        deleteContent,
      }}
    >
      {children}
    </BlogEditor.Provider>
  );
}
