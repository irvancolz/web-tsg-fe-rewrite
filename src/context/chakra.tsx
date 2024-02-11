"use client";
import { ChakraProvider } from "@chakra-ui/react";
import React, { ReactNode } from "react";

export function ChakraContext({ children }: { children: ReactNode }) {
  return <ChakraProvider>{children}</ChakraProvider>;
}
