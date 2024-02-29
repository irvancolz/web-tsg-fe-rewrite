"use client";
import React, { ReactNode, useRef } from "react";
import style from "./selector.module.scss";
import {
  BlogContent,
  BlogContentType,
  BlogContentTypeFlag,
  BlogImageProps,
} from "@/types";
import {
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  Tooltip,
  Wrap,
  useDisclosure,
} from "@chakra-ui/react";
import { HiOutlinePlus } from "react-icons/hi2";
import { CiImageOn } from "react-icons/ci";
import { RiText } from "react-icons/ri";
import { RiHeading } from "react-icons/ri";
import { FileInput } from "../../input";
import { useBlogEditor } from "../../blog-editor/context";
import { recordFileData } from "@/utils";

const logo: { [key: string]: ReactNode } = {
  text: <RiText />,
  heading: <RiHeading />,
  img: <CiImageOn />,
};

export function ContentEditorSelector() {
  const { onToggle, onClose, isOpen } = useDisclosure();
  const inputRef = useRef<HTMLInputElement>(null);
  const ctx = useBlogEditor();

  if (!ctx) {
    console.error(
      "content blog editor must be used inside blog editor context."
    );
  }

  function handleSelect(types: BlogContentType) {
    const id = `${Date.now()}`;
    let content: string | string[] = "";

    const newData: BlogContent = {
      id,
      content,
      type: types,
    };

    ctx.updateContent(newData);
    onToggle();
  }

  function addImage(e: any) {
    const file = e.target?.files?.[0]! as File;
    const { url, ...restFileDetail } = recordFileData(file);
    if (!url) return;
    const data: BlogContent = {
      id: `${Date.now()}`,
      type: "img",
      content: url,
      props: restFileDetail,
    };

    ctx.updateContent(data);
    onToggle();
  }

  return (
    <div className={style.container}>
      <Popover isOpen={isOpen} onClose={onClose} placement="top">
        <PopoverTrigger>
          <button onClick={onToggle} className={style.btn}>
            <HiOutlinePlus />
          </button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <Wrap p={".5rem"}>
            {BlogContentTypeFlag.map((t, i) => {
              return (
                <Tooltip key={i} label={t}>
                  {t != "img" ? (
                    <button
                      title={t}
                      className={style.btn}
                      onClick={() => handleSelect(t)}
                    >
                      {logo[t]}
                    </button>
                  ) : (
                    <div className={style.btn}>
                      <FileInput
                        ref={inputRef}
                        label={logo[t]}
                        onChange={addImage}
                      />
                    </div>
                  )}
                </Tooltip>
              );
            })}
          </Wrap>
        </PopoverContent>
      </Popover>
    </div>
  );
}
