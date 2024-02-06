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
    path: "/about",
  },
  {
    label: "services",
    path: "/service",
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
  const [open, setOpen] = useState<boolean>(false);
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
            onClick={() => setOpen(() => false)}
            className={styles.tsg_logo}
            alt="tsg logo"
            src={getStaticAssetsPath("/images/png", "icon_tsg.png")}
          />
        </Link>
        <Button
          variant="unstyled"
          className={styles.hamburger}
          onClick={() => setOpen((curr) => !curr)}
        >
          <GiHamburgerMenu style={{ fill: "#fff", fontSize: "2rem" }} />
        </Button>
        <nav
          className={styles.nav}
          data-open={open}
          onClick={() => setOpen(() => false)}
        >
          {/* desktop topnav */}
          <ul className={styles.nav_list}>
            {links.map((path, i) => {
              return (
                <li key={i} onClick={() => setOpen(() => false)}>
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
