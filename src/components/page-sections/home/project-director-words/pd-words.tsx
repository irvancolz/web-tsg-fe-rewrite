import React from "react";
import style from "./pd-words.module.scss";
import { Images } from "@/components";
import { getStaticAssetsPath } from "@/consts";

export function ProjectDirectorWords() {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <blockquote className={style.quote}>
          At TSG, our team of around one hundred dedicated engineers and I are
          passionate about delivering innovative IT solutions tailored to your
          unique needs. We&rsquo;re eager to hear about your challenges and
          explore how our expertise can help transform your business.
          Let&rsquo;s embark on this digital journey together and turn your pain
          points into opportunities for growth and success.
        </blockquote>
      </div>
      <div className={style.pd}>
        <Images
          className={style.pd_img}
          alt="Mr faiza pict"
          src={getStaticAssetsPath("/images/webp", "pak faiza.webp")}
        />
        <p className={style.pd_name}>Faiza Renaldi</p>
        <p className={style.pd_title}>Project Director at TSG.</p>
      </div>
    </div>
  );
}
