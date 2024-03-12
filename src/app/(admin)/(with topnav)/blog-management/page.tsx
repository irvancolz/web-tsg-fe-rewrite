"use client";
import { getAllBlog } from "@/api/supabase";
import { Button, Flex, Skeleton, Stack, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BiPlus } from "react-icons/bi";
import { BlogTable } from "@/components";
import style from "./page.module.scss";
import { usePageName } from "@/context";
import { Blog } from "@/types";

export default function Page() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { setPageName } = usePageName();
  const toast = useToast();

  useEffect(() => {
    setPageName({
      name: "blog management",
      desc: "organize your existing blog",
    });

    async function getBlog() {
      setLoading(() => true);
      const data = await getAllBlog();
      setBlogs(() => data);
      setLoading(() => false);
    }

    toast.promise(getBlog(), {
      error: (e) => {
        return { title: "error occured", description: e.message };
      },
      loading: {
        title: "loading",
        description: "please wait a moment",
      },
      success: {
        title: "success",
        description: "blogs succesfully retrieved",
      },
    });

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
      {loading ? (
        <Stack>
          <Skeleton fadeDuration={0.2} />
          <Skeleton fadeDuration={0.2} />
          <Skeleton fadeDuration={0.2} />
          <Skeleton fadeDuration={0.2} />
          <Skeleton fadeDuration={0.2} />
        </Stack>
      ) : (
        <BlogTable blogs={blogs} />
      )}
    </div>
  );
}
