"use client";
import { uploadToSupabase } from "@/api/supabase";
import { BlogContent } from "@/types";
import { getLocalFile, isExtAllowed } from "@/utils";
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

  async function save() {
    const updatedFilepath = await uploadNewFile();
    updatedFilepath.forEach((item) => {
      updateContent(item);
    });
  }

  async function uploadNewFile() {
    const contentWitheNewFile = content.filter(
      (item) => item.type == "img" && item.content.startsWith("blob")
    );

    let contentWithNewFilePath: BlogContent[] = [];

    for (const item of contentWitheNewFile) {
      if (!isExtAllowed(item.props?.extensions!)) continue;
      const file = await getLocalFile(item.content, item.props?.name!);
      const uploadRes = await uploadToSupabase(file, item.props?.name!);
      URL.revokeObjectURL(item.content);
      const newContent: BlogContent = {
        content: uploadRes.path,
        id: item.id,
        type: item.type,
        props: item.props,
      };
      contentWithNewFilePath.push(newContent);
    }
    return contentWithNewFilePath;
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
