"use client";
import { getBlog } from "@/api/supabase";
import { Blog } from "@/types";
import { normalizeString } from "@/utils";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BlogEditor } from "@/components";

export default function Page() {
  const { title: blogTitle }: { title: string } = useParams();
  const [data, setData] = useState<Blog | undefined>();

  useEffect(() => {
    async function getBlogData() {
      const data = await getBlog(normalizeString(blogTitle));
      setData(() => data);
    }

    getBlogData();
  }, [blogTitle]);

  return <BlogEditor data={data} />;
}
