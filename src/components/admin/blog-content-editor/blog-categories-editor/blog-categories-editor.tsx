"use client";
import React, { useEffect, useState } from "react";
import { useBlogEditor } from "../../blog-editor/context";
import { Categories } from "@/types";
import { getAllCategories } from "@/api/supabase";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  Tag,
  TagCloseButton,
  TagLabel,
  TagRightIcon,
  Wrap,
} from "@chakra-ui/react";
import { HiOutlinePlus } from "react-icons/hi2";

export function BlogCategoriesEditor() {
  const ctx = useBlogEditor();
  if (!ctx) {
    console.error(
      "blog categories editor must be used inside blog editor context."
    );
  }

  const [allCategories, setAllCategories] = useState<Categories[]>([]);

  const { categories, deleteCategory, addCategory } = ctx;
  useEffect(() => {
    async function getCategories() {
      const data = await getAllCategories();
      setAllCategories(() => data);
    }

    getCategories();
  }, []);

  return (
    <Wrap gap={".5rem"}>
      {categories.length < 1 && (
        <p data-cypress="blog-categories-placeholder">select blog categories</p>
      )}
      {allCategories
        .filter((item) => categories.some((e) => e == item.id))
        .map((category) => {
          return (
            <Tag key={category.id} colorScheme="green">
              <TagLabel textTransform="capitalize">{category.name}</TagLabel>
              <TagCloseButton onClick={() => deleteCategory(category.id)} />
            </Tag>
          );
        })}
      <Popover>
        <PopoverTrigger>
          <button>
            <HiOutlinePlus />
          </button>
        </PopoverTrigger>
        <PopoverContent>
          <Wrap gap={".25rem"} p={".5rem"}>
            {(categories.length == 0
              ? allCategories
              : allCategories.filter((item) => !categories.includes(item.id))
            ).map((category) => {
              return (
                <Tag
                  key={category.id}
                  onClick={() => addCategory(category.id)}
                  cursor={"pointer"}
                >
                  <TagLabel textTransform="capitalize">
                    {category.name}
                  </TagLabel>
                  <TagRightIcon as={HiOutlinePlus} />
                </Tag>
              );
            })}
          </Wrap>
        </PopoverContent>
      </Popover>
    </Wrap>
  );
}
