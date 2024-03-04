"use client";
import { getAllBlog } from "@/api/supabase";
import { Button, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BiPlus } from "react-icons/bi";
import { BlogTable } from "@/components";
import style from "./page.module.scss";
import { usePageName } from "@/context";
import { Blog } from "@/types";

export default function Page() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const { setPageName } = usePageName();

  useEffect(() => {
    setPageName({
      name: "blog management",
      desc: "organize your existing blog",
    });

    async function getBlog() {
      const data = await getAllBlog();
      setBlogs(() => data);
    }

    getBlog();

    //eslint-disable-next-line
  }, []);

  return (
    <div className={style.container}>
      <Flex my={"3rem"}>
        <Button
          as={"a"}
          href="/blog-management/add"
          colorScheme="blue"
          ml={"auto"}
          leftIcon={<BiPlus />}
        >
          Add new
        </Button>
      </Flex>
      <BlogTable blogs={blogs} />
    </div>
  );
}
