import { getAllBlog } from "@/api";
import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { BiPlus } from "react-icons/bi";
import { BlogTable } from "@/components";
import style from "./page.module.scss";

export default async function Page() {
  const blogs = await getAllBlog();
  return (
    <div className={style.container}>
      <Flex my={"3rem"}>
        <Button colorScheme="blue" ml={"auto"} leftIcon={<BiPlus />}>
          Add new
        </Button>
      </Flex>
      <BlogTable blogs={blogs} />
    </div>
  );
}
