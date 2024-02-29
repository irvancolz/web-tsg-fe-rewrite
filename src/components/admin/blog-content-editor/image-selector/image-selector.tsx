"use client";
import React, { useState } from "react";
import { FileInput } from "../..";
import { getDynamicAssetsUrl, recordFileData } from "@/utils";
import style from "./image-selector.module.scss";
import { BlogImageProps } from "@/types";

export function ImageSelector({
  value,
  onChange,
}: {
  value: string;
  onChange: (a: any) => void;
}) {
  const [url, setUrl] = useState<string>(value);
  const label = (
    //eslint-disable-next-line @next/next/no-img-element
    <img
      alt="image uploaded"
      src={getDynamicAssetsUrl(url)}
      className={style.img}
      title="choose another image"
    />
  );

  function changeHandler(e: any) {
    const file = e.target?.files?.[0]! as File;
    const data = recordFileData(file);
    onChange(data);
    setUrl(() => data.url!);
  }

  return (
    <div>
      <FileInput label={label} onChange={changeHandler} />
    </div>
  );
}
