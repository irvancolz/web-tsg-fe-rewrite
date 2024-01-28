import React, { CSSProperties } from "react";
import styles from "./partners.module.scss";
import { Images, PartnerlistSlider } from "@/components";
import { getStaticAssetsPath } from "@/consts";

const partners = [
  {
    img: "Bpjs.webp",
    ratio: 480 / 106,
  },
  {
    img: "idx.webp",
    ratio: 240 / 103,
  },
  {
    img: "bjb.webp",
    ratio: 208 / 108,
  },
  {
    ratio: 240 / 103,
    img: "amikom.webp",
  },
  {
    ratio: 200 / 131,
    img: "skkmigas.webp",
  },
  {
    ratio: 240 / 103,
    img: "metrojaya.webp",
  },
  {
    ratio: 274 / 137,
    img: "petrasel.webp",
  },
  {
    ratio: 240 / 103,
    img: "pemprovdki.webp",
  },
  {
    ratio: 240 / 103,
    img: "tableau.webp",
  },
  {
    ratio: 240 / 103,
    img: "unjani.webp",
  },
  {
    ratio: 240 / 103,
    img: "talend.webp",
  },
  {
    ratio: 240 / 103,
    img: "artajasa.webp",
  },
  {
    ratio: 240 / 103,
    img: "mindid.webp",
  },
];

const partners2 = [
  {
    ratio: 240 / 103,
    img: "pgn.webp",
  },
  {
    ratio: 240 / 103,
    img: "wavemaker.webp",
  },
  {
    ratio: 307 / 88,
    img: "rz-azra.webp",
  },
  {
    ratio: 480 / 206,
    img: "polisi.webp",
  },
  {
    ratio: 422 / 138,
    img: "scada.webp",
  },
  {
    ratio: 240 / 103,
    img: "ittp.webp",
  },
  {
    ratio: 480 / 206,
    img: "kominfo.webp",
  },
  {
    ratio: 240 / 103,
    img: "kemenpan.webp",
  },
  {
    ratio: 330 / 93,
    img: "patriatex.webp",
  },
  {
    ratio: 228 / 169,
    img: "triparta.webp",
  },
  {
    ratio: 240 / 103,
    img: "pnc.webp",
  },
  {
    ratio: 300 / 300,
    img: "ragam.webp",
  },
];

export function Partners() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
        Trusted and Supported by the Best Organization
      </h2>
      <PartnerlistSlider images={partners} />
      <PartnerlistSlider images={partners2} />
    </section>
  );
}
