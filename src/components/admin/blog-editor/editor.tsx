import React, { useEffect, useState } from "react";
import { useBlogEditor } from "./context";
import { Blog, BlogContent } from "@/types";
import TextEditor from "../text-editor";
import style from "./editor.module.scss";
import {
  Divider,
  Tag,
  TagCloseButton,
  TagLabel,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { ContentEditorSelector } from "..";

export function Editor({ data }: { data?: Blog }) {
  const {
    attachment,
    categories,
    content,
    save,
    setAttachment,
    setCategories,
    setContent,
    setTitle,
    title,
    updateContent,
  } = useBlogEditor();
  const [newContent, setNewContent] = useState<BlogContent>({} as BlogContent);

  useEffect(() => {
    if (data) {
      setAttachment(data.attachment);
      setTitle(data.title);
      setCategories(data.tsg_blog_categories.map((e) => e.tsg_categories.name));
      setContent([]);
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div>
      <TextEditor
        className={style.title}
        placeholder="title"
        value={title}
        valueEditor={setTitle}
      />
      <Wrap>
        {categories.map((category, i) => {
          return (
            <WrapItem key={i}>
              <Tag>
                <TagLabel>{category}</TagLabel>
              </Tag>
            </WrapItem>
          );
        })}
      </Wrap>
      <Divider mt={"1rem"} h={"1px"} bg={"gray"} opacity={0.5} />
      {content.map((c) => {
        return (
          <>
            <TextEditor key={c.id} value={c.content as string} />
          </>
        );
      })}
      <ContentEditorSelector />
    </div>
  );
}
