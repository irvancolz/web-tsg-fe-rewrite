import React from "react";
import styles from "./footer.module.scss";
import { Images } from "@/components";
import Link from "next/link";
import { getStaticAssetsPath } from "@/consts";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io5";
import { GrLinkedin } from "react-icons/gr";

const services = [
  {
    label: "tailor-made application development",
    path: "/under-construction",
  },
  {
    label: "technology managed services",
    path: "/under-construction",
  },
  {
    label: " IT manpower supply",
    path: "/under-construction",
  },
  {
    label: "IT roadmap and strategic planning",
    path: "/under-construction",
  },
  {
    label: "software quality assurance and security testing",
    path: "/under-construction",
  },
  {
    label: "agile and scrum training and consulting",
    path: "/under-construction",
  },
];

const links = [
  {
    label: "about us",
    path: "/under-construction",
  },
  {
    label: "services",
    path: "/under-construction",
  },
  {
    label: "contact",
    path: "/under-construction",
  },
  {
    label: "blog / news / events",
    path: "/blogs",
  },
];

const socialmedia = [
  {
    label: "instagram",
    path: "https://www.instagram.com/tsgitdev/",
    icon: <IoLogoInstagram />,
  },
  {
    label: "facebook",
    path: "https://www.facebook.com/tsgitdev",
    icon: <FaFacebookF />,
  },
  {
    label: "x",
    path: "https://twitter.com/tsgitdev",
    icon: <BsTwitterX />,
  },
  {
    label: "linkedin",
    path: "https://www.linkedin.com/company/pt-tristar-surya-gemilang/",
    icon: <GrLinkedin />,
  },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.sections}>
        <Images
          className={styles.logo}
          alt="logo tsg"
          src={getStaticAssetsPath("/images/png", "logo-tsg-light.png")}
        />
        <div>
          <h2>PT. Tristar Surya Gemilang</h2>
          <p className={styles.text}>
            TSG is a boss-less organization specializing in its services as a
            global technology solution provider.
          </p>
          <nav aria-label="social media navigation">
            <ul className={styles.socials}>
              {socialmedia.map((item, i) => {
                return (
                  <li key={i} className={styles.socialmedia} title={item.label}>
                    <Link href={item.path} target="_blank">
                      {item.icon}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </section>
      <section className={styles.sections}>
        <h3>company</h3>
        <nav aria-label="footer navigation">
          <ul className={styles.links}>
            {links.map((item, i) => {
              return (
                <li key={i} className={styles.link}>
                  <Link href={item.path}>{item.label}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </section>
      <section className={styles.sections}>
        <h3>services</h3>
        <nav aria-label="secondary footer navigation">
          <ul className={styles.links}>
            {services.map((item, i) => {
              return (
                <li key={i} className={styles.link}>
                  <Link href={item.path}>{item.label}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </section>
      <section className={styles.sections}>
        <h3>support</h3>
        <p className={styles.text}>
          Jl Raya Hankam Komplek Pondok Jatimurni Blok | no 6/7 RT.002/RW.003
          Seberang masjid Ashshulaha Kota Bekasi, Jawa Barat, 17431
        </p>
      </section>
    </footer>
  );
}
