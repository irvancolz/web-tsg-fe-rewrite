import React, { CSSProperties } from "react";
import { PartnerlistSliderProps } from ".";
import { Images } from "@/components";
import { getStaticAssetsPath } from "@/consts";
import styles from "./partnerlist-slider.module.scss";

export function PartnerlistSlider({
  images,
}: {
  images: PartnerlistSliderProps[];
}) {
  return (
    <div
      className={styles.container}
      style={
        {
          "--total-slide": images.length,
        } as CSSProperties
      }
    >
      <div className={styles.partners}>
        {images.map((org, i) => {
          return (
            <Images
              key={i}
              className={styles.partners_logo}
              style={{ "--ratio": org.ratio } as CSSProperties}
              alt=""
              src={getStaticAssetsPath("/images/webp", org.img)}
            />
          );
        })}
        {images.map((org, i) => {
          return (
            <Images
              key={i}
              className={styles.partners_logo}
              style={{ "--ratio": org.ratio } as CSSProperties}
              alt=""
              src={getStaticAssetsPath("/images/webp", org.img)}
            />
          );
        })}
      </div>
    </div>
  );
}
