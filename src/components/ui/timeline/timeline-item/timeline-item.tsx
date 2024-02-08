"use client";
import React, { useLayoutEffect, useRef } from "react";
import style from "./timeline-item.module.scss";
import { TimelineItemProps } from "./timeline-item.props";
import { gsap } from "gsap";

export function TimelineItem({ date, desc, title }: TimelineItemProps) {
  const itemRef = useRef<HTMLLIElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: itemRef.current,
          start: "top 45%",
          onEnter() {
            itemRef.current?.setAttribute("data-show", "true");
          },
          onEnterBack() {
            itemRef.current?.setAttribute("data-show", "true");
          },
          onLeave() {
            itemRef.current?.removeAttribute("data-show");
          },
          onLeaveBack() {
            itemRef.current?.removeAttribute("data-show");
          },
        },
      });
    }, itemRef);

    return () => ctx.revert();
  }, []);

  return (
    <li className={style.content} ref={itemRef}>
      <h3 className={style.content_title}>{title}</h3>
      <time className={style.content_date}>{date}</time>
      <p className={style.content_desc}>{desc}</p>
    </li>
  );
}
