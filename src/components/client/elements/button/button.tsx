import React, { CSSProperties } from "react";
import styles from "./button.module.scss";
import { ButtonProps } from "./button.types";

export function Button({
  variant = "solid",
  className = "",
  leftIcon,
  rightIcon,
  col = "var(--col-azure-800)",
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      style={{ "--bg-col": col } as CSSProperties}
      className={`${styles.btn} ${className}`}
      data-variant={variant}
      {...rest}
    >
      {leftIcon}
      <span className={styles.content}>{children}</span>
      {rightIcon}
    </button>
  );
}
