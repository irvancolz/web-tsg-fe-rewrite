"use client";
import { isAuthorized } from "@/api/supabase";
import { Sidebar, Topnav } from "@/components";
import { Flex } from "@chakra-ui/react";
import { redirect, useRouter } from "next/navigation";

import React, { ReactNode, useEffect, useState } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  const [authorized, setAuthorized] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function checkToken() {
      const token = await isAuthorized();

      setAuthorized(() => token);
    }
    checkToken();
  }, []);

  // fix in the future, not perfect but works
  if (!authorized && authorized != null) {
    redirect("/login");
  }

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
