"use client";
import { Box, Button, Flex, Stack } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import style from "./sidebar.module.scss";
import { RxExit } from "react-icons/rx";
import { logout } from "@/api/supabase";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Images } from "@/components";
import { getStaticAssetsPath } from "@/consts";
import { RiArticleLine } from "react-icons/ri";
import { MdOutlineSpaceDashboard } from "react-icons/md";

const ADMIN_ROUTES: { href: string; label: string; icon: ReactNode }[] = [
  {
    href: "/dashboard",
    label: "dashboard",
    icon: <MdOutlineSpaceDashboard />,
  },
  {
    href: "/blog-management",
    label: "blog management",
    icon: <RiArticleLine />,
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
      <Box mb={"2rem"}>
        <Images
          alt="tsg logo"
          src={getStaticAssetsPath("/images/png", "logo-tsg-light.png")}
          className={style.sidebar_logo}
        />
      </Box>
      <Stack h={"80vh"}>
        {ADMIN_ROUTES.map((route, i) => {
          return (
            <Link
              key={i}
              className={style.sidebar_link}
              href={route.href}
              data-active={route.href == path}
            >
              <Flex alignItems={"center"} gap={"0.5rem"}>
                {route.icon}
                {route.label}
              </Flex>
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
