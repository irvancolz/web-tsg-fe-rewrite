"use client";
import { getBlog } from "@/api";
import { Blog } from "@/types";
import { normalizeString } from "@/utils";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Page() {
  const { title }: { title: string } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    async function getBlogData() {
      const data = await getBlog(normalizeString(title));
      setBlog(() => data);
    }
    getBlogData();
  }, [title]);

  return <div>content editor</div>;
}
