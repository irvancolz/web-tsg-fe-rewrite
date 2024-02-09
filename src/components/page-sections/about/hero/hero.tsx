import React from "react";
import style from "./hero.module.scss";
import { Images } from "@/components";
import { getStaticAssetsPath } from "@/consts";
import Link from "next/link";

export function Hero() {
  return (
    <div className={style.hero}>
      <Images
        style={{ objectFit: "cover" }}
        className={style.hero_img}
        src={getStaticAssetsPath("/images/webp", "about-hero.webp")}
        alt="img by cities rebrands on pexels"
      />
      <div className={style.hero_content}>
        <h1 className={style.hero_content_title}>How we can help you?</h1>
        <blockquote className={style.hero_content_quote}>
          &ldquo; We start with ourselves, together we build a happy TSG family,
          spread happiness to our customers with our solution, and believe
          it&apos;s built around Allah SWT blessing.&rdquo;
        </blockquote>
        <div className={style.hero_content_ceo}>
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
