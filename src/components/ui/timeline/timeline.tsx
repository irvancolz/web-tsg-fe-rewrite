"use client";
import React, { useLayoutEffect, useRef } from "react";
import style from "./timeline.module.scss";
import { TimelineItem, TimelineItemProps } from ".";
import gsap from "gsap";

export function Timeline({ event }: { event: TimelineItemProps[] }) {
  const containerRef = useRef<HTMLOListElement | null>(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".line", {
        scaleY: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: true,
          start: "top 45%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <ol ref={containerRef} className={style.container}>
      <div className={`${style.line} line`}></div>
      {event.map((item, i) => {
        return <TimelineItem key={i} {...item} />;
      })}
    </ol>
  );
}
