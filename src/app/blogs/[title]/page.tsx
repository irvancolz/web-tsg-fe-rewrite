import { getBlog } from "@/api";
import { Images } from "@/components";
import Link from "next/link";
import React from "react";
import style from "./page.module.scss";

export default async function Page({
  params: { title },
}: {
  params: { title: string };
}) {
  const {
    Categories,
    attachment,
    content,
    createdAt,
    title: blogTitle,
  } = await getBlog(title);
  return (
    <section className={style.blog}>
      <div className={style.blog_header}>
        <h1 className={style.blog_title}>{blogTitle}</h1>
        <p className={style.blog_date}>{createdAt}</p>
        <ul className={style.blog_categories}>
          {Categories.map((category) => {
            return (
              <li key={category.id} className={style.blog_link}>
                <Link href={`/blogs?category=${category.CategoryName}`}>
                  {category.CategoryName}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <Images className={style.blog_img} alt={blogTitle} src={attachment} />

      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className={style.blog_desc}
      ></div>
    </section>
  );
}
