"use client";
import { Button, Container } from "@/components";
import React, { useEffect, useRef } from "react";
import styles from "./hero.module.scss";
import { getStaticAssetsPath } from "@/consts";

export function HomeHero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.playbackRate = 0.5;
    videoRef.current.play();
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          The Global Technology Solution Provider
        </h1>
        <p className={styles.description}>
          OPTIMIZE your business with results and views that exceed your
          expectations.
        </p>
        <p className={styles.tagline}>Make everything EASY with Tee-Es-Gee</p>
        <Button col="var(--col-blue-300)">Get Demo</Button>
      </div>

      <video ref={videoRef} className={styles.video} autoPlay loop muted>
        <source
          src={getStaticAssetsPath("/video", "banner.webm")}
          type="video/webm"
        />
      </video>
    </section>
  );
}
