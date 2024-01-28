import React from "react";
import styles from "./company-strength.module.scss";
import { Container } from "@/components";
import {
  GrConfigure,
  GrGlobe,
  GrHistory,
  GrOptimize,
  GrOrganization,
  GrStarOutline,
  GrSync,
  GrUserExpert,
} from "react-icons/gr";

const ourStrengthContent = [
  {
    icon: <GrSync className={styles.icon} />,
    title: "End-to-end solution",
    description:
      " to achieve business goals, not only creating computer based information systems.",
  },
  {
    icon: <GrStarOutline className={styles.icon} />,
    title: "Highly experienced",
    description: " in start-up and incubation development software.",
  },
  {
    icon: <GrConfigure className={styles.icon} />,
    title: "Full support",
    description:
      " on implementation and after Go-Live stages including maintenance, bug fixing, and upgrading.",
  },
  {
    icon: <GrOrganization className={styles.icon} />,
    title: "Close connections",
    description:
      " with resource pools of universities, training centres, and developers communities.",
  },
  {
    icon: <GrOptimize className={styles.icon} />,
    title: "Highly experienced",
    description: " on long and continuous improvements projects",
  },
  {
    icon: <GrHistory className={styles.icon} />,
    title: "Strong SLAs and 24/7 Support",
    description: " Team to cover worldwide projects.",
  },
  {
    icon: <GrUserExpert className={styles.icon} />,
    title: " Global team",
    description:
      " experienced in international projects and multi-methodology approach.",
  },
  {
    icon: <GrGlobe className={styles.icon} />,
    title: "Strong support from worldwide",
    description: " IT vendors",
  },
];

export function CompanyStrength() {
  return (
    <Container>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Lets Build Your Business With Us</h2>
          <p>
            See why TSG can be the best options and help you and your business
            growth.
          </p>
        </div>
        <div className={styles.strength}>
          {ourStrengthContent.map((item, i) => {
            return (
              <div key={i} className={styles.strength_card}>
                {item.icon}
                <p>{item.title + item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
