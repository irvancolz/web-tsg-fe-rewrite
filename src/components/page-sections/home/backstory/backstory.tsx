import { Container, Images } from "@/components";
import React from "react";
import styles from "./backstory.module.scss";

export function HomeBackstory() {
  return (
    <Container>
      <div className={styles.content}>
        <div className={styles.article}>
          <h2 className={styles.title}>
            TSG was founded to fill a critical gap in the IT consultant
            environment by emphasizing concrete outcomes over software and
            paperwork.
          </h2>
          <p className={styles.desc}>
            TSG has become a trusted partner for businesses seeking strategic,
            innovative, and outcome-driven IT advisory services by focusing our
            approach on the end result
          </p>
        </div>
        <div className={styles.images}>
          <div className={styles.img}></div>
          <div
            className={styles.img}
            title="Photo by Shamin Haky on Unsplash"
          ></div>
          <div
            className={styles.img}
            title="Photo by UX Indonesia on Unsplash"
          ></div>
        </div>
      </div>
    </Container>
  );
}
