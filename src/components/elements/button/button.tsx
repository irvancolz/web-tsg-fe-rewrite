import React, { CSSProperties, ComponentProps } from "react";
import styles from "./button.module.scss";

export type ButtonProps = {
  variant?: "solid" | "outlined" | "transparent" | "unstyled";
  leftIcon?: React.JSX.Element;
  rightIcon?: React.JSX.Element;
  col?: string;
} & ComponentProps<"button">;

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
