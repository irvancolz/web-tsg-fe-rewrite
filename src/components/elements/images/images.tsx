import React from "react";
import style from "./images.module.scss";
import Image from "next/image";
import { ImagesProps } from "./images.props";

export function Images({
  className = "",
  alt,
  fill,
  sizes,
  priority,
  height,
  width,
  ...rest
}: ImagesProps) {
  return (
    <span className={`${style.container} ${className}`}>
      <Image
        alt="img"
        fill={fill ? fill : true}
        priority={priority ? priority : false}
        {...rest}
      />
    </span>
  );
}
