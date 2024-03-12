"use client";
import { Blog, BlogContent } from "@/types";
import React, { ReactNode, createContext, useContext, useState } from "react";
import { updateBlogCategories, uploadNewFile } from "./utils";
import { getCategoriesByBlog, updateBlog, uploadBlog } from "@/api/supabase";

export type BlogEditorInterface = {
  id?: number;
  title: string;
  content: BlogContent[];
  attachment: string;
  categories: number[];
  setId: (a: number) => void;
  setCategories: (a: number[]) => void;
  setContent: (b: BlogContent[]) => void;
  setTitle: (b: string) => void;
  setAttachment: (b: string) => void;
  updateContent: (c: BlogContent) => void;
  deleteContent: (c: BlogContent) => void;
  addCategory: (a: number) => void;
  deleteCategory: (a: number) => void;
  save: () => void;
};

const BlogEditor = createContext<BlogEditorInterface>(
  {} as BlogEditorInterface
);

export function useBlogEditor() {
  return useContext(BlogEditor);
}

export function BlogEditorContext({ children }: { children: ReactNode }) {
  const [id, setId] = useState<number | undefined>();
  const [title, setTitles] = useState<string>("");
  const [content, setContents] = useState<BlogContent[]>([]);
  const [attachment, setAttachments] = useState<string>("");
  const [categories, setCategoriess] = useState<number[]>([]);

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

  function setCategories(a: number[]) {
    return setCategoriess(() => a);
  }

  function addCategory(a: number) {
    const newData = new Set([...categories, a]);
    return setCategories([...Array.from(newData)]);
  }

  function deleteCategory(a: number) {
    const filtered = categories.filter((i) => i != a);
    return setCategories(filtered);
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

  async function getBlogIdAnBaseCategories({
    data,
    id,
  }: {
    data: Omit<
      Blog,
      "tsg_blog_categories" | "created_at" | "updated_at" | "id"
    >;
    id?: number;
  }) {
    if (!id) {
      const newBlog = await uploadBlog(data);
      return {
        id: newBlog?.id!,
        baseCategories: [],
      };
    }
    const categories = await getCategoriesByBlog(id);

    return {
      id,
      baseCategories: (categories ?? []).map((item) => item.id),
    };
  }

  async function save() {
    const data: Omit<
      Blog,
      "tsg_blog_categories" | "created_at" | "updated_at" | "id"
    > = {
      content,
      title,
      attachment,
    };
    const updatedFilepath = await uploadNewFile(content);
    updatedFilepath.forEach((item) => {
      updateContent(item);
    });

    if (id) {
      await updateBlog(data, id);
    }

    const { baseCategories, id: blogId } = await getBlogIdAnBaseCategories({
      data,
      id,
    });

    await updateBlogCategories({
      blog_id: blogId!,
      newCategory: categories,
      baseCategory: baseCategories,
    });
  }

  return (
    <BlogEditor.Provider
      value={{
        id,
        setId,
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
        addCategory,
        deleteCategory,
      }}
    >
      {children}
    </BlogEditor.Provider>
  );
}
