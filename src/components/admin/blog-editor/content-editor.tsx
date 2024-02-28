"use client";
import { BlogContent } from "@/types";
import React from "react";
import { HeadingEditor, ImageSelector } from "..";
import TextEditor from "../text-editor";
import style from "./editor.module.scss";
import { useBlogEditor } from "./context";

export default function ContentEditor({ content }: { content: BlogContent }) {
  const { updateContent } = useBlogEditor();

  function handleEditorChange(content: BlogContent, value: string | string[]) {
    const newContent = {
      ...content,
      content: value,
    };

    updateContent(newContent);
  }
  function changeHandler(val: string) {
    return handleEditorChange(content, val);
  }

  if (content.type == "img") {
    return (
      <ImageSelector
        key={content.id}
        value={content.content as string}
        onChange={changeHandler}
      />
    );
  }

  if (content.type == "heading") {
    return (
      <HeadingEditor
        key={content.id}
        value={content.content as string}
        valueEditor={changeHandler}
      />
    );
  }
  return (
    <TextEditor
      className={style.text}
      key={content.id}
      value={content.content as string}
      valueEditor={changeHandler}
    />
  );
}
