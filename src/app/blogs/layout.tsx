import React, { ReactNode } from "react";
import style from "./blog.module.scss";
import { getAllCategories } from "@/api/supabase";
import Link from "next/link";

export default async function Layout({ children }: { children: ReactNode }) {
  const categories = await getAllCategories();
  return (
    <div className={style.container}>
      <nav
        className={style.categories_container}
        aria-label="blog category navigation"
      >
        <h3>All Blog Categories</h3>
        <ul className={style.categories}>
          {(categories ? categories : []).map((category) => {
            return (
              <li key={category.name} className={style.link}>
                <Link href={`/blogs?category=${category.name}`}>
                  {category.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {children}
    </div>
  );
}
