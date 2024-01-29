import React from "react";
import styles from "./company-services.module.scss";
import { Container, Images } from "@/components";
import { getStaticAssetsPath } from "@/consts";

const services = [
  {
    img: "servis1.webp",
    title: "Tailor-made Application Development",
    description:
      "Introducing CustomCode Solutions, your premier partner for Tailor-made Application Development. Our team collaborates closely with businesses, delivering bespoke web, mobile, or desktop applications tailored to unique needs. From comprehensive consultation to ongoing maintenance, we ensure optimal performance across industries such as healthcare, finance, manufacturing, retail, education, and logistics. Choose us for a proven track record, client-centric approach, and commitment to turning your unique ideas into powerful, tailor-made applications for business success",
  },
  {
    img: "servis2.webp",
    title: "Technology Managed Services",
    description:
      "Delivering end-to-end IT solutions designed to optimize your business operations. Our services encompass proactive network monitoring, cybersecurity management, cloud computing integration, and strategic IT consulting. With a dedicated team of seasoned professionals, we ensure your technology infrastructure remains robust, secure, and scalable. From 24/7 helpdesk support to seamless data backup and recovery, ",
  },
  {
    img: "servis3.webp",
    title: "IT Manpower Supply services",
    description:
      "We specialize in providing skilled and highly qualified IT professionals to meet the dynamic staffing needs of your organization. With a vast network of talented individuals, we offer a diverse range of expertise, including software development, system administration, cybersecurity, project management, and more. Our flexible and scalable workforce solutions ensure that you have the right talent at the right time, empowering your business to navigate technological challenges seamlessly.",
  },
  {
    img: "servis4.webp",
    title: "IT Roadmap and Strategic Planning services",
    description:
      "Our seasoned team of IT strategists collaborates closely with your leadership to align technology initiatives with your business goals. We conduct thorough assessments, analyzing your current IT infrastructure, identifying bottlenecks, and recommending strategic solutions. Our tailored IT Roadmaps provide a clear, phased approach to technology implementation, ensuring optimal resource utilization and cost-effectiveness. From cloud migration strategies to cybersecurity frameworks, we guide you through every step, fostering innovation and future-proofing your IT investments",
  },
  {
    img: "servis5.webp",
    title: "Software Quality Assurance and Security Testing Services",
    description:
      "Our dedicated team of skilled QA professionals ensures that your software applications not only meet but exceed industry standards for functionality, reliability, and security. We conduct rigorous testing processes, employing advanced methodologies to identify and rectify potential vulnerabilities, ensuring the robustness of your software. From functional testing to performance testing and security assessments. We tailor our services to fit your unique needs, offering comprehensive testing strategies that align with your development lifecycle.",
  },
  {
    img: "servis6.webp",
    title: "Agile and Scrum Training and Consulting",
    description:
      "Our expert trainers offer comprehensive Agile and Scrum training programs, empowering teams to embrace iterative development, collaboration, and adaptability. Through immersive workshops and hands-on exercises, participants gain practical insights into Agile principles and Scrum frameworks. Additionally, our seasoned consultants work closely with businesses to tailor Agile methodologies to their specific needs, fostering a culture of continuous improvement. ",
  },
];

export function CompanyService() {
  return (
    <Container>
      <div className={styles.services}>
        {services.map((service, i) => {
          return (
            <article key={i} className={styles.services_content}>
              <Images
                alt={service.title}
                src={getStaticAssetsPath("/images/webp", service.img)}
                className={styles.services_img}
              />
              <div>
                <h2 className={styles.services_content_title}>
                  {service.title}
                </h2>
                <p className={styles.services_content_desc}>
                  {service.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </Container>
  );
}
