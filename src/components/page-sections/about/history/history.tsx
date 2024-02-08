"use client";
import React, { useLayoutEffect, useRef } from "react";
import styles from "./history.module.scss";
import { Timeline, TimelineItemProps } from "@/components/ui/timeline";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const timeline: TimelineItemProps[] = [
  {
    date: "february 2021",
    desc: "TSG was established on 8 february 2021 and start with logistic and IT provider",
    title: "the begining",
  },
  {
    date: "February 2022",
    desc: "Satpol PP is our first project",
    title: "first project",
  },
  {
    date: "July 2022",
    desc: "TSG open its new branches to support client located in Bandung",
    title: "expand to bandung",
  },
  {
    date: "november 2022",
    desc: "Purwokerto was opened to provide the supply of our engineer",
    title: "Purwokerto joined the team",
  },
  {
    date: "january 2023",
    desc: "continue supporting customer MTCC until now",
    title: "keep the spirit",
  },
];

export function History() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("p", {
        opacity: 0,
        y: 10,
        duration: 0.5,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 45%",
          toggleActions: "play none none reverse",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={styles.history}>
      <div className="timeline">
        <Timeline event={timeline} />
      </div>
      <div id="text" className={styles.history_text}>
        <p>
          We saw a need for a company that prioritizes actual outcomes and
          handles client&apos;s pain areas directly, assuring a long-term
          influence on their business growth and success. We strive to provide
          unrivaled IT solutions that meet and surpass client expectations,
          accelerating their digital transformation path. TSG has become a
          trusted partner for businesses seeking strategic, innovative, and
          outcome-driven IT advisory services by focusing our approach on the
          end result.
        </p>
      </div>
    </div>
  );
}
