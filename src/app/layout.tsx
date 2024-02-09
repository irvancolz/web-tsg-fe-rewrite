"use client";
import React, { ReactNode } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import "./globals.scss";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import { Footer, Topnav } from "@/components";

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
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/icon_tsg.png" type="image/x-icon" />
        <link rel="icon" sizes="16x16" href="/icon_tsg.png" />
        <title>PT Tristar Surya Gemilang</title>
      </head>
      <body>
        <Topnav />
        <main>
          <div id="main_container">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
