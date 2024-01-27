import React, { ComponentProps, ReactNode } from "react";
import style from "./container.module.scss";

export function Container({
  children,
  className,
  ...rest
}: { children: ReactNode } & ComponentProps<"section">) {
  return (
    <section className={`${style.container} ${className}`} {...rest}>
      {children}
    </section>
  );
}
