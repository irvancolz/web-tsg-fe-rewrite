"use client";
import React, { useLayoutEffect, useRef } from "react";
import style from "./hero.module.scss";
import { Images } from "@/components";
import { getStaticAssetsPath } from "@/consts";
import Link from "next/link";
import { gsap } from "gsap";
import SplitType from "split-type";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const title = SplitType.create("[data-animation='title']", {
      types: "words",
    });
    const quotes = SplitType.create("[data-animation='quote']", {
      types: "lines",
    });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { opacity: 0 },
      });

      tl.from(title.words, {
        y: 10,
        stagger: 0.1,
        onComplete: function () {
          gsap.set(this.targets(), { clearProps: "all" });
        },
      })
        .from(quotes.lines, {
          y: 13,
          stagger: 0.2,
          ease: "power2.inOut",
          duration: 1,
          onComplete: function () {
            gsap.set(this.targets(), { clearProps: "all" });
          },
        })
        .from("[data-animation='ceo']", {
          opacity: 0,
          onComplete: function () {
            gsap.set(this.targets(), { clearProps: "all" });
          },
        });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className={style.hero} ref={containerRef}>
      <Images
        style={{ objectFit: "cover" }}
        className={style.hero_img}
        src={getStaticAssetsPath("/images/webp", "about-hero.webp")}
        alt="img by cities rebrands on pexels"
      />
      <div className={style.hero_content}>
        <h1 className={style.hero_content_title} data-animation="title">
          How we can help you?
        </h1>
        <blockquote className={style.hero_content_quote} data-animation="quote">
          &ldquo; We start with ourselves, together we build a happy TSG family,
          spread happiness to our customers with our solution, and believe
          it&apos;s built around Allah SWT blessing.&rdquo;
        </blockquote>
        <div className={style.hero_content_ceo} data-animation="ceo">
          <Link
            href="https://www.linkedin.com/in/fitra-budi-a5a593227/"
            target="_blank"
          >
            Fitra Budi
          </Link>
          <p>CEO of TSG</p>
        </div>
      </div>
    </div>
  );
}
