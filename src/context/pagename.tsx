"use client";
import React, { ReactNode, createContext, useContext, useState } from "react";

export type PageNameProps = {
  name: string;
  desc?: string;
};

export type PageNameContextInterface = {
  setPageName: (a: PageNameProps) => void;
  pageName: PageNameProps;
};

const PageNameContext = createContext<PageNameContextInterface>(
  {} as PageNameContextInterface
);

export function usePageName() {
  return useContext(PageNameContext);
}

export function PageNameContextProvider({ children }: { children: ReactNode }) {
  const [pageName, setPageName] = useState<PageNameProps>({} as PageNameProps);
  return (
    <PageNameContext.Provider value={{ pageName, setPageName }}>
      {children}
    </PageNameContext.Provider>
  );
}
