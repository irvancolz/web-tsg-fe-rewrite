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
            <span key={i} className={styles.partners_logo_wrapper}>
              <Images
                className={styles.partners_logo}
                style={{ "--ratio": org.ratio } as CSSProperties}
                alt=""
                src={getStaticAssetsPath("/images/webp", org.img)}
              />
            </span>
          );
        })}
        {images.map((org, i) => {
          return (
            <span key={i} className={styles.partners_logo_wrapper}>
              <Images
                className={styles.partners_logo}
                style={{ "--ratio": org.ratio } as CSSProperties}
                alt=""
                src={getStaticAssetsPath("/images/webp", org.img)}
              />
            </span>
          );
        })}
      </div>
    </div>
  );
}
