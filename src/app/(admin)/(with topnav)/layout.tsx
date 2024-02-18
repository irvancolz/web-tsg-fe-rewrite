import { Footer, Sidebar, Topnav } from "@/components";
import { Flex } from "@chakra-ui/react";
import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Topnav variant="static" />
      <main>
        <div id="main_container">
          <Flex gap={"2rem"}>
            <Sidebar />
            {children}
          </Flex>
        </div>
      </main>
    </>
  );
}
