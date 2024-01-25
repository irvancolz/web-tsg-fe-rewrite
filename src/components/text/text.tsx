import React, { ComponentProps } from "react";
import styles from "./text.module.scss";
export type TextProps = {
  variant?: "light" | "dark";
} & ComponentProps<"p">;

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
