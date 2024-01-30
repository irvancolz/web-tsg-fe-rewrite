import { getAllBlog, getAllCategories } from "@/api";
import React from "react";
import style from "./blog.module.scss";
import Link from "next/link";
import { Images } from "@/components";

export const revalidate = 0;

export default async function Page() {
  // const categories = await getAllCategories();
  const blogs = await getAllBlog();
  return (
    <div className={style.blogs}>
      {blogs.map((blog) => {
        return (
          <section key={blog.id} className={style.blogs_content}>
            <Images
              alt={blog.title}
              src={blog.attachment}
              className={style.blogs_content_img}
            />
            <div>
              <Link href={`/blogs/${blog.title}`}>
                <h2 className={style.blogs_content_title}>{blog.title}</h2>
              </Link>
              <div
                className={style.blogs_content_desc}
                dangerouslySetInnerHTML={{ __html: blog.content }}
              ></div>
              <ul className={style.blogs_content_categories}>
                {blog.Categories.map((category, i) => {
                  return (
                    <li key={i} className={style.link}>
                      <Link href={`/blogs?category=${category}`}>
                        {category}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        );
      })}
    </div>
  );
}
