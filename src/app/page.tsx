import Image from "next/image";
import styles from "./page.module.scss";
import { Button, HomeHero } from "@/components";
import { FaChevronDown } from "react-icons/fa";

export default function Home() {
  return (
    <main className={styles.main}>
      <HomeHero />
      <Button>Hello</Button>

      <Button leftIcon={<FaChevronDown />} variant="outlined">
        Hello
      </Button>
      <Button rightIcon={<FaChevronDown />} variant="transparent">
        Hello
      </Button>
    </main>
  );
}
