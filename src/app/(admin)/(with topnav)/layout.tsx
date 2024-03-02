"use client";
import { isAuthorized } from "@/api/supabase";
import { Sidebar } from "@/components";
import { Flex } from "@chakra-ui/react";
import { redirect, useRouter } from "next/navigation";
import style from "./layout.module.scss";

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
      <main>
        <Flex gap={"2rem"}>
          <Sidebar />
          <div className={style.container}>{children}</div>
        </Flex>
      </main>
    </>
  );
}
