import React from "react";
import style from "./blog-heading.module.scss";

export function BlogHeading({ content }: { content: string }) {
  return <h3 className={style.heading}>{content}</h3>;
}
