import React from "react";
import style from "./blog-text.module.scss";

export function BlogText({ content }: { content: string }) {
  return <p className={style.text}>{content}</p>;
}
