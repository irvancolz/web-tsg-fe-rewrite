import { ComponentProps } from "react";

export type ButtonProps = {
  variant?: "solid" | "outlined" | "transparent" | "unstyled";
  leftIcon?: React.JSX.Element;
  rightIcon?: React.JSX.Element;
  col?: string;
} & ComponentProps<"button">;
