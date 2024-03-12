import React, { useEffect } from "react";
import { useBlogEditor } from "./context";
import { Blog, BlogImageProps } from "@/types";
import { TextEditor } from "../text-editor";
import style from "./editor.module.scss";
import { Button, Divider, Stack, Toast, useToast } from "@chakra-ui/react";
import { ContentEditorSelector, ImageSelector } from "..";
import ContentEditor from "./content-editor";
import { BlogCategoriesEditor } from "../blog-content-editor/blog-categories-editor/blog-categories-editor";

export function Editor({ data }: { data?: Blog }) {
  const {
    attachment,
    content,
    save,
    setAttachment,
    setCategories,
    setContent,
    setTitle,
    title,
  } = useBlogEditor();

  const toast = useToast();

  useEffect(() => {
    if (data) {
      setAttachment(data.attachment);
      setTitle(data.title);
      setCategories(data.tsg_blog_categories.map((e) => e.tsg_categories.id));
      setContent(data.content);
    }

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  function changeImgHandler(e: BlogImageProps) {
    return setAttachment(e.url ?? "");
  }

  return (
    <div className={style.container}>
      <div>
        <Button id="save-blog">Save</Button>
      </div>
      <TextEditor
        className={style.title}
        placeholder="title"
        value={title}
        valueEditor={setTitle}
      />
      <BlogCategoriesEditor />
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
