import Link from "next/link";
import React, { ReactNode } from "react";
import style from "./topnav-navigations.module.scss";
import { Button } from "..";
import { BiChevronDown } from "react-icons/bi";

export type NavigationProps = {
  label: ReactNode;
  path: string;
  children?: NavigationProps[];
  icon?: React.JSX.Element;
};

export type TopnavNavigationProps = {
  links: NavigationProps;
};

export function TopnavNavigations({
  label,
  path,
  children = [],
}: NavigationProps) {
  if (children.length <= 0)
    return (
      <Link className={style.link} href={path}>
        {label}
      </Link>
    );
  return (
    <div className={style.link_with_overlay}>
      <Button
        rightIcon={<BiChevronDown />}
        className={style.link}
        variant="unstyled"
      >
        {label}
      </Button>
      <ul className={style.overlay}>
        {children.map((links, i) => {
          return (
            <Link
              className={style.link_inner}
              key={i}
              href={`${path}${links.path}`}
            >
              {links.icon}
              {links.label}
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
