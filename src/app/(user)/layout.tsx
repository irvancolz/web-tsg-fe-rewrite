import { Footer, Topnav } from "@/components";
import React, { ReactNode } from "react";
import "./layout.scss"

export default function Layout({ children }: { children: ReactNode }) {
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