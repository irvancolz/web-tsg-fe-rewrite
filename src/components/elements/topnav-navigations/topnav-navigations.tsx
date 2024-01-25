import Link from "next/link";
import React, { ReactNode } from "react";

export type NavigationProps = {
  label: ReactNode;
  path: string;
  children?: NavigationProps[];
};

export type TopnavNavigationProps = {
  links: NavigationProps;
};

export function TopnavNavigations({
  label,
  path,
  children = [],
}: NavigationProps) {
  if (children.length <= 0) return <Link href={path}>{label}</Link>;
  return (
    <>
      <button type="button">{label}</button>
      {/* <ul>
        {children.map((links, i) => {
          return (
            <Link key={i} href={links.path}>
              {links.label}
            </Link>
          );
        })}
      </ul> */}
    </>
  );
}
