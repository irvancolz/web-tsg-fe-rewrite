"use client";
import { getBlog } from "@/api/supabase";
import TextEditor from "@/components/admin/text-editor";
import { Blog, BlogContent } from "@/types";
import { normalizeString } from "@/utils";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import style from "./page.module.scss";
import { Divider } from "@chakra-ui/react";
import { BlogEditor } from "@/components";

export default function Page() {
  const { title: blogTitle }: { title: string } = useParams();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<BlogContent[]>([]);
  const [data, setData] = useState<Blog | undefined>();

  useEffect(() => {
    async function getBlogData() {
      const data = await getBlog(normalizeString(blogTitle));
      setData(() => data);
      setTitle(() => data.title);
      // update the content
      setContent(() => []);
    }

    function addContent(content: BlogContent) {
      setContent((prev) => [...prev, content]);
    }

    getBlogData();
  }, [blogTitle]);

  return <BlogEditor data={data} />;
}
