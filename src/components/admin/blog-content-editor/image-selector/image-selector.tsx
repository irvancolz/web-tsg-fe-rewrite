"use client";
import React, { useState } from "react";
import { FileInput } from "../..";
import { getDynamicAssetsUrl } from "@/utils";

export function ImageSelector({
  value,
  onChange,
}: {
  value: string;
  onChange: (s: string) => void;
}) {
  const [url, setUrl] = useState<string>(value);
  //eslint-disable-next-line
  const label = <img alt="image uploaded" src={getDynamicAssetsUrl(url)} />;

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
