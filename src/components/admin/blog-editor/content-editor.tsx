"use client";
import { BlogContent } from "@/types";
import React, { ReactNode } from "react";
import { HeadingEditor, ImageSelector } from "..";
import { TextEditor } from "../text-editor";
import style from "./editor.module.scss";
import { useBlogEditor } from "./context";
import { FaRegTrashAlt } from "react-icons/fa";
import { Popover, PopoverContent, PopoverTrigger } from "@chakra-ui/react";

export default function ContentEditor({ content }: { content: BlogContent }) {
  const { updateContent, deleteContent } = useBlogEditor();

  function handleEditorChange(content: BlogContent, value: string | string[]) {
    const newContent = {
      ...content,
      content: value,
    };

    updateContent(newContent);
  }

  function changeHandler(val: string | string[]) {
    return handleEditorChange(content, val);
  }

  // update types in the future if add more content types
  type EditorInterface = {
    img: ReactNode;
    heading: ReactNode;
    text: ReactNode;
    list: ReactNode;
  };

  const Editor: EditorInterface = {
    img: (
      <ImageSelector
        key={content.id}
        value={content.content as string}
        onChange={changeHandler}
      />
    ),
    heading: (
      <HeadingEditor
        key={content.id}
        value={content.content as string}
        valueEditor={changeHandler}
      />
    ),
    text: (
      <TextEditor
        className={style.text}
        key={content.id}
        value={content.content as string}
        valueEditor={changeHandler}
      />
    ),
    list: null,
  };

  return (
    <Popover placement="right-start" trigger="hover">
      <PopoverTrigger>
        <div className={style.editor}>{Editor[content.type]}</div>
      </PopoverTrigger>
      <PopoverContent w={"fit-content"} rounded={"50%"}>
        <button
          onClick={() => deleteContent(content)}
          className={style.delete_btn}
        >
          <FaRegTrashAlt />
        </button>
      </PopoverContent>
    </Popover>
  );
}
