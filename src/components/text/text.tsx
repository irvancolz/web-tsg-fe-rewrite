import React from "react";
import styles from "./text.module.scss";
import { TextProps } from "./text.types";

export function Text({
  variant = "dark",
  className = "",
  children,
  ...rest
}: TextProps) {
  return (
    <p className={`${styles} ${className}`} {...rest}>
      {children}
    </p>
  );
}
