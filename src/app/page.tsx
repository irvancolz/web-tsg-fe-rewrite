import {
  CompanyService,
  CompanyStrength,
  HomeBackstory,
  HomeHero,
  Partners,
  ProjectDirectorWords,
} from "@/components";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <HomeHero />
      <HomeBackstory />
      <ProjectDirectorWords />
      <CompanyStrength />
      <Partners />
      <CompanyService />
    </main>
  );
}
