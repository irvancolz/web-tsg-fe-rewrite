import React, { useEffect, useState } from "react";
import { useBlogEditor } from "./context";
import { Blog, BlogContent } from "@/types";
import { TextEditor } from "../text-editor";
import style from "./editor.module.scss";
import {
  Button,
  Divider,
  Stack,
  Tag,
  TagLabel,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { ContentEditorSelector } from "..";
import ContentEditor from "./content-editor";

export function Editor({ data }: { data?: Blog }) {
  const {
    categories,
    content,
    save,
    setAttachment,
    setCategories,
    setContent,
    setTitle,
    title,
  } = useBlogEditor();
  const [newContent, setNewContent] = useState<BlogContent>({} as BlogContent);

  useEffect(() => {
    if (data) {
      setAttachment(data.attachment);
      setTitle(data.title);
      setCategories(data.tsg_blog_categories.map((e) => e.tsg_categories.name));
      setContent(data.content);
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className={style.container}>
      <TextEditor
        className={style.title}
        placeholder="title"
        value={title}
        valueEditor={setTitle}
      />
      <Button onClick={save}>Save</Button>
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
      <Stack gap={"2rem"}>
        {content.map((c) => {
          return <ContentEditor key={c.id} content={c} />;
        })}
      </Stack>
      <ContentEditorSelector />
    </div>
  );
}
