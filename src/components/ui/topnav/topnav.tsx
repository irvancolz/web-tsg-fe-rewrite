"use client";
import React, { CSSProperties, useEffect, useState } from "react";
import styles from "./topnav.module.scss";
import {
  Button,
  Images,
  NavigationProps,
  TopnavNavigations,
} from "@/components";
import { getStaticAssetsPath } from "@/consts";
import tailorMadeIcon from "../../../../public/images/svg/tailor-made.svg";
import piechartIcon from "../../../../public/images/svg/pie-chart.svg";
import manpowerIcon from "../../../../public/images/svg/manpower.svg";
import itRoadmapIcon from "../../../../public/images/svg/itroadmap.svg";
import infoTriangleIcon from "../../../../public/images/svg/Info-triangle.svg";
import bookIcon from "../../../../public/images/svg/book.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

const links: NavigationProps[] = [
  {
    label: "about us",
    path: "/about-us",
  },
  {
    label: "services",
    path: "/our-services",
    children: [
      {
        label: "tailor-made application development",
        path: "/tailor-made-application-development",
        icon: (
          <Images src={tailorMadeIcon} alt="icon" className={styles.icon} />
        ),
      },
      {
        label: "technology managed services",
        path: "/technology-managed-services",
        icon: <Images src={piechartIcon} alt="icon" className={styles.icon} />,
      },
      {
        label: " IT manpower supply",
        path: "/it-manpower-supply",
        icon: <Images src={manpowerIcon} alt="icon" className={styles.icon} />,
      },
      {
        label: "IT roadmap and strategic planning",
        path: "/it-roadmap-and-strategic-planning",
        icon: <Images src={itRoadmapIcon} alt="icon" className={styles.icon} />,
      },
      {
        label: "software quality assurance and security testing",
        path: "/software-qa-and-security-testing",
        icon: (
          <Images src={infoTriangleIcon} alt="icon" className={styles.icon} />
        ),
      },
      {
        label: "agile and scrum training and consulting",
        path: "/agile-and-scrum-training-consulting",
        icon: <Images src={bookIcon} alt="icon" className={styles.icon} />,
      },
    ],
  },
  {
    label: "contact",
    path: "/contact",
  },
  {
    label: "blog / news / events",
    path: "/blogs",
  },
];
export function Topnav() {
  const [scroll, setScroll] = useState<number>(0);
  useEffect(() => {
    const func = () => {
      setScroll(() => scrollY);
    };
    addEventListener("scroll", func);

    return () => removeEventListener("scroll", func);
  }, []);

  return (
    <header
      style={
        {
          "--bg-col": scroll > 0 ? "var(--col-blue-800)" : "transparent",
        } as CSSProperties
      }
      className={styles.container}
    >
      <div className={styles.logo_container}>
        <Link href={"/"}>
          <Images
            className={styles.tsg_logo}
            alt="tsg logo"
            src={getStaticAssetsPath("/images/png", "logo-tsg-light.png")}
          />
        </Link>
        <Button variant="unstyled" className={styles.hamburger}>
          <GiHamburgerMenu style={{ fill: "#fff", fontSize: "2rem" }} />
        </Button>
        <nav className="nav">
          {/* desktop topnav */}
          <ul className={styles.nav}>
            {links.map((path, i) => {
              return (
                <li key={i}>
                  <TopnavNavigations key={i} {...path} />
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className="odoo">
        <Images
          alt="odoo logo"
          className={styles.odoo_logo}
          src={getStaticAssetsPath("/images/webp", "odoo-light.webp")}
        />
      </div>
    </header>
  );
}
