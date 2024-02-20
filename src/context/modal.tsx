"use client";
import { useDisclosure } from "@chakra-ui/react";
import React, { ReactNode, createContext } from "react";

export type ModalContextType = {
  open: () => void;
  close: () => void;
  isOpen: boolean;
};

const ModalContext = createContext<ModalContextType>({
  close: () => {},
  open: () => {},
  isOpen: false,
});

export function ModalContextProvider({ children }: { children: ReactNode }) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <ModalContext.Provider
      value={{
        close: onClose,
        open: onOpen,
        isOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
