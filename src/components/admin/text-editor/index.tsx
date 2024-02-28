"use client";
import React, { useEffect, useState } from "react";
import ContentEditable from "react-contenteditable";
import style from "./text-editor.module.scss";
import sanitizeHtml from "sanitize-html";

export default function TextEditor({
  valueEditor,
  value,
  className,
  placeholder = "type something",
}: {
  valueEditor?: (a: string) => void;
  value?: string;
  className?: string;
  placeholder?: string;
}) {
  const [placeholderShown, setPlaceholderShown] = useState<"block" | "none">(
    "block"
  );

  const sanitizeConf = {
    allowedTags: ["b", "i", "em", "strong", "a", "p", "h1"],
    allowedAttributes: { a: ["href"] },
  };

  useEffect(() => {
    setPlaceholderShown(() =>
      !value ? "block" : value == "<br>" || value == " " ? "block" : "none"
    );
  }, [value]);

  function udpateValue(e: { target: { value: string } }) {
    if (e.target.value == "<br>") {
      setPlaceholderShown(() => "block");
      valueEditor?.("");
      return;
    }
    setPlaceholderShown("none");
    valueEditor?.(sanitizeHtml(e.target.value, sanitizeConf));
  }
  return (
    <ContentEditable
      className={`${style.editor} ${className}`}
      html={value || ""}
      onChange={udpateValue}
      data-placeholder={placeholder}
      style={{
        "--placeholder-show": placeholderShown,
      }}
    />
  );
}
