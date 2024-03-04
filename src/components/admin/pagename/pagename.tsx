import React from "react";
import style from "./pagename.module.scss";
import { usePageName } from "@/context";

export function Pagename() {
  const { pageName } = usePageName();
  return (
    <div>
      <h1 className={style.title}>{pageName.name}</h1>
      {pageName.desc && <p>{pageName.desc}</p>}
    </div>
  );
}
