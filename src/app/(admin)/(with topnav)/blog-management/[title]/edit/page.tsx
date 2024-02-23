"use client";
import { getBlog } from "@/api";
import TextEditor from "@/components/admin/text-editor";
import { BlogContent } from "@/types";
import { normalizeString } from "@/utils";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import style from "./page.module.scss";
import { Divider } from "@chakra-ui/react";

export default function Page() {
  const { title: blogTitle }: { title: string } = useParams();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<BlogContent[]>([]);

  useEffect(() => {
    async function getBlogData() {
      const data = await getBlog(normalizeString(blogTitle));
      setTitle(() => data.title);
      // update the content
      setContent(() => []);
    }

    function addContent(content: BlogContent) {
      setContent((prev) => [...prev, content]);
    }

    getBlogData();
  }, [blogTitle]);

  return (
    <div>
      <TextEditor
        className={style.title}
        value={title}
        valueEditor={setTitle}
        placeholder="title"
      />
      <Divider mt={"1rem"} h={"2px"} bg={"GrayText"} />
    </div>
  );
}
