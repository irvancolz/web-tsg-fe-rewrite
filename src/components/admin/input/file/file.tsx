"use client";
import React, { ComponentProps, ReactNode, forwardRef, useRef } from "react";
import style from "./file.module.scss";

export const FileInput = forwardRef<
  HTMLInputElement,
  { label: ReactNode } & ComponentProps<"input">
>(({ label, ...rest }, ref) => {
  const defaultRef = useRef<HTMLInputElement>(null);
  const activeRef = ref ? ref : defaultRef;
  return (
    <label className={style.container}>
      <input ref={activeRef} className={style.input} {...rest} type="file" />
      {label}
    </label>
  );
});

FileInput.displayName = "InputFile";
