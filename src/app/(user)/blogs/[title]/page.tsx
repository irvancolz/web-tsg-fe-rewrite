import { getBlog } from "@/api/supabase";
import { Images, BlogContent } from "@/components";
import Link from "next/link";
import React from "react";
import style from "./page.module.scss";
import { formatDate, normalizeString } from "@/utils";
import { getSupabasePublicUrl } from "@/api/supabase/storage";

export const revalidate = 0;

export default async function Page({
  params: { title },
}: {
  params: { title: string };
}) {
  const {
    tsg_blog_categories,
    attachment,
    content,
    created_at,
    title: blogTitle,
  } = await getBlog(normalizeString(title));

  return (
    <section className={style.blog}>
      <div className={style.blog_header}>
        <h1 className={style.blog_title}>{blogTitle}</h1>
        <p className={style.blog_date}>{formatDate(created_at)}</p>
        <ul className={style.blog_categories}>
          {tsg_blog_categories.map(({ tsg_categories }) => {
            return (
              <li key={tsg_categories.id} className={style.blog_link}>
                <Link href={`/blogs?category=${tsg_categories.name}`}>
                  {tsg_categories.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <Images
        className={style.blog_img}
        alt={blogTitle}
        src={getSupabasePublicUrl(attachment)}
        style={{ objectFit: "cover" }}
      />

      <div className={style.blog_content}>
        {content.map((item) => {
          return <BlogContent key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}
