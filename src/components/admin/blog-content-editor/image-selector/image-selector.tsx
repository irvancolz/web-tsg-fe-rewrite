"use client";
import React, { useState } from "react";
import { FileInput } from "../..";
import { getDynamicAssetsUrl } from "@/utils";
import style from "./image-selector.module.scss";

export function ImageSelector({
  value,
  onChange,
}: {
  value: string;
  onChange: (s: string) => void;
}) {
  const [url, setUrl] = useState<string>(value);
  const label = (
    //eslint-disable-next-line @next/next/no-img-element
    <img
      alt="image uploaded"
      src={getDynamicAssetsUrl(url)}
      className={style.img}
    />
  );

  function changeHandler(e: any) {
    const imgUrl = URL.createObjectURL(e.target?.files?.[0]!);
    onChange(imgUrl);
    setUrl(() => imgUrl);
  }

  return (
    <div>
      <FileInput label={label} onChange={changeHandler} />
    </div>
  );
}
