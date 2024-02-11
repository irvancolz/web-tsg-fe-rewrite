import { ChakraContext } from "@/context";
import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <ChakraContext>{children}</ChakraContext>;
}
