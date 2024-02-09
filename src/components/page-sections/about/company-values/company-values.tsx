import React from "react";
import style from "./company-values.module.scss";
import { Container } from "@/components";

const companyValues: { title: string; desc: string }[] = [
  {
    title: "Integrity",
    desc: "Integrity is a picture of each of us in TSG. It shows consistency between words and beliefs reflected in daily actions. We always think before we speak so that our actions match what is said.",
  },
  {
    title: "Trustworthiness",
    desc: "Trust is an essential value for us. Building trust requires transparent and open communication, high respect, and a commitment to continuous collaboration. We will deliver them to you. No. Matter. What.",
  },
  {
    title: "Blessings",
    desc: "It is the result of our work activities at TSG which shows appreciation and commitment to team members, families, stakeholders, and the global community. Blessing is a form of positive energy that can be felt by everyone associated with the company.",
  },
];

export function CompanyValues() {
  return (
    <div className={style.container}>
      <p className={style.title}>
        Tristar Surya Gemilang (TSG) is a global tech provider emphasizing
        collaboration and innovation. Our boss-less structure fosters agility,
        allowing swift adaptation to diverse client needs. We offer tailored app
        development, IT services, manpower supply, and strategic planning.
        Through QA, security testing, and Agile/Scrum training, we ensure
        quality. We prioritize building partnerships to deliver lasting value.
        With TSG, you&apos;re not just embracing digital transformation;
        you&apos;re securing a successful tech future.
      </p>
      <div className={style.values}>
        {companyValues.map((item, i) => {
          return (
            <div key={i} className={style.values_card}>
              <h3 className={style.values_card_title}>{item.title}</h3>
              <p className={style.values_card_desc}>{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
