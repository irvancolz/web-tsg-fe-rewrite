import { ComponentProps } from "react";

export type TextProps = {
  variant?: "light" | "dark";
} & ComponentProps<"p">;
