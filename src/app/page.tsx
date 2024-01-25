import Image from "next/image";
import styles from "./page.module.scss";
import { Button, HomeHero } from "@/components";
import { FaChevronDown } from "react-icons/fa";

export default function Home() {
  return (
    <main className={styles.main}>
      <HomeHero />
      <div
        style={{
          height: "100vh",
        }}
      ></div>
    </main>
  );
}
