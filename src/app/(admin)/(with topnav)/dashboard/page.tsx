"use client";
import { usePageName } from "@/context";
import React, { useEffect } from "react";

export default function Page() {
  const { setPageName } = usePageName();

  useEffect(() => {
    setPageName({ name: "dashboard" });

    //eslint-disable-next-line
  }, []);

  return <div>Dashboard Page</div>;
}
