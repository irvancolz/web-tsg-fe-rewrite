"use client";
import React, { useRef } from "react";
import styles from "./blog-code.module.scss";

export function BlogCode({ content }: { content: string }) {
  const ref = useRef<HTMLButtonElement>(null);
  function copy() {
    navigator.clipboard.writeText(content);
    if (ref.current) {
      ref.current.innerText = "copied";
    }
  }

  return (
    <div className={styles.container}>
      <button ref={ref} onClick={copy}>
        copy
      </button>
      <pre>{content}</pre>
    </div>
  );
}
