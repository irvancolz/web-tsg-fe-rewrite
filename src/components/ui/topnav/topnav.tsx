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
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

const links: NavigationProps[] = [
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
