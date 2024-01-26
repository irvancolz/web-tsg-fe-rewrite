"use client";
import React from "react";
import styles from "./under-construction.module.scss";
import { Button, Images } from "@/components";
import { useRouter } from "next/navigation";
import { getStaticAssetsPath } from "@/consts";

export default function Page() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Images
          className={`${styles.gear} ${styles.gear_big}`}
          src={getStaticAssetsPath("/images/svg", "gear.svg")}
          alt="gear"
        />
        <Images
          className={`${styles.gear} ${styles.gear_small}`}
          src={getStaticAssetsPath("/images/svg", "gear.svg")}
          alt="gear"
        />
        <h1 className={styles.title}>COMING SOON</h1>
        <p className={styles.desc}>
          Sorry for the inconvenience the page you trying to access is still
          under constructions. please come again if the page is available.
          thankyou
        </p>
        <Button onClick={() => router.back()}>Previous page</Button>
      </div>
    </div>
  );
}
