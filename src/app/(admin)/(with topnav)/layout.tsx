import { Footer, Topnav } from "@/components";
import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Topnav variant="static" />
      <main>
        <div id="main_container">{children}</div>
      </main>
    </>
  );
}
