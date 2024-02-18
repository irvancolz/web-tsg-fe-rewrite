"use client";
import { Button, Stack } from "@chakra-ui/react";
import React from "react";
import style from "./sidebar.module.scss";
import { RxExit } from "react-icons/rx";
import { logout } from "@/api/supabase";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const ADMIN_ROUTES: { href: string; label: string }[] = [
  {
    href: "/dashboard",
    label: "dashboard",
  },
  {
    href: "/blog-management",
    label: "blog management",
  },
];

export function Sidebar() {
  const path = usePathname();
  const router = useRouter();

  function handleLogout() {
    logout();
    router.push("/login");
  }
  return (
    <div className={style.sidebar}>
      <Stack h={"80vh"}>
        {ADMIN_ROUTES.map((route, i) => {
          return (
            <Link
              key={i}
              className={style.sidebar_link}
              href={route.href}
              data-active={route.href == path}
            >
              {route.label}
            </Link>
          );
        })}
      </Stack>
      <Button colorScheme="blue" rightIcon={<RxExit />} onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
}
