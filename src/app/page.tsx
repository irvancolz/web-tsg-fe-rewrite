import { HomeBackstory, HomeHero, ProjectDirectorWords } from "@/components";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <HomeHero />
      <HomeBackstory />
      <ProjectDirectorWords />
    </main>
  );
}
