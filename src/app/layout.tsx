"use client";
import React, { ReactNode } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import "./globals.scss";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import { Topnav } from "@/components";

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
    <html lang="en">
      <body>
        <main>
          <Topnav />
          {children}
        </main>
      </body>
    </html>
  );
}
