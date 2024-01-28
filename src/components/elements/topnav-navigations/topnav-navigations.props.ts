import { ReactNode } from "react";

export type NavigationProps = {
  label: ReactNode;
  path: string;
  children?: NavigationProps[];
  icon?: React.JSX.Element;
};

export type TopnavNavigationProps = {
  links: NavigationProps;
};
