import { getDynamicAssetsUrl } from "@/utils";
import React from "react";
import styles from "./blog-img.module.scss";

export function BlogImg({ src, alt }: { src: string; alt: string }) {
  const url = getDynamicAssetsUrl(src);
  return (
    <div className={styles.container}>
      {/* eslint-disable-next-line  */}
      <img src={getDynamicAssetsUrl(url)} alt={alt} loading="lazy" />
    </div>
  );
}
