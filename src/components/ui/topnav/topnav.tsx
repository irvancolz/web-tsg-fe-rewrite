import React from "react";
import styles from "./topnav.module.scss";
import { Images, NavigationProps, TopnavNavigations } from "@/components";
import { getStaticAssetsPath } from "@/consts";

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
        label: "contact",
        path: "/contact",
      },
      {
        label: "blog / news / events",
        path: "/blogs",
      },
      {
        label: "contact",
        path: "/contact",
      },
      {
        label: "blog / news / events",
        path: "/blogs",
      },
      {
        label: "contact",
        path: "/contact",
      },
      {
        label: "blog / news / events",
        path: "/blogs",
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
  return (
    <header className={styles.container}>
      <div className="logo">
        <Images
          className={styles.tsg_logo}
          alt="tsg logo"
          src={getStaticAssetsPath("/images/png", "logo-tsg-light.png")}
        />
      </div>
      <nav className="nav">
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
