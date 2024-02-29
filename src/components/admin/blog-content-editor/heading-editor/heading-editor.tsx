import React, { Key } from "react";
import style from "./heading-editor.module.scss";
import { TextEditor } from "../../text-editor";

export function HeadingEditor(props: {
  value: string;
  valueEditor?: (a: string) => void;
  placeholder?: string;
  key?: Key;
}) {
  return <TextEditor className={style.content} {...props} />;
}
