"use client";
import { Footer, Topnav } from "@/components";
import React, { ReactNode } from "react";
import "./layout.scss";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function Layout({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (x: number) => 1 - Math.pow(1 - x, 4),
    });

    function lenisRaf(time: number) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(lenisRaf);
    }

    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    requestAnimationFrame(lenisRaf);
  }, []);
  return (
    <>
      <Topnav />
      <main>
        <div id="main_container">{children}</div>
      </main>
      <Footer />
    </>
  );
}
