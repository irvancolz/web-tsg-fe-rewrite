import { Images } from "@/components";
import { getStaticAssetsPath } from "@/consts";
import React from "react";
import styles from "./page.module.scss";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
import { GoMail } from "react-icons/go";

const locations = [
  {
    name: "headquarter",
    address:
      "Jl Raya Hankam Komplek Pondok Jatimurni Blok | no 6/7 RT.002/RW.003 Seberang masjid Ashshulaha Kota Bekasi, Jawa Barat, 17431",
    maps: "https://goo.gl/maps/GLKUexLdXWUx27TQ9",
  },
  {
    name: "bandung",
    address: "Jl. Pasirluyu nomor 1/167, pasirluyu, kec.regol Kota Bandung",
    maps: "https://maps.app.goo.gl/CZS5wK7S3JbqBvLr5",
  },
  {
    name: "purwokerto",
    address:
      "Jl. Jend. Gatot Subroto No.67, Sitapen, Purwanegara, Kec. Purwokerto Tim., Kabupaten Banyumas, Jawa Tengah 53116",
    maps: "https://maps.app.goo.gl/JgBL16Xtjbg16M3W7",
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

export default function Page() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <h1 className={styles.title}>Contact Us</h1>
          <p>
            Consult Your Business Needs With TSG We Will Provide The Best
            Solution For Your Business
          </p>
        </div>

        <div className={styles.body}>
          <Link href="tel:(021) 84307431" className={styles.cta}>
            <BsTelephone />
            (021) 84307431
          </Link>
          <Link href="mailto:hello@tsgitdev.com" className={styles.cta}>
            <GoMail />
            hello@tsgitdev.com
          </Link>
          <div className={styles.socials}>
            {socialmedia.map((item, i) => {
              return (
                <Link
                  className={styles.socials_icon}
                  href={item.path}
                  target="_blank"
                  key={i}
                  title={item.label}
                >
                  {item.icon}
                </Link>
              );
            })}
          </div>
        </div>
        <section className={styles.locations}>
          {locations.map((loc, i) => {
            return (
              <div key={i} className={styles.locations_card}>
                <h2 className={styles.locations_name}>{loc.name}</h2>
                <Link
                  href={loc.maps}
                  className={styles.locations_address}
                  target="_blank"
                >
                  {loc.address}
                </Link>
              </div>
            );
          })}
        </section>
      </div>
      <Images
        className={styles.img}
        alt="contact us"
        src={getStaticAssetsPath("/images/webp", "contact-bg.webp")}
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  );
}
