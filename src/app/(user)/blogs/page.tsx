import style from "./blog.module.scss";
import Link from "next/link";
import { Images } from "@/components";
import { getAllBlog, getAllBlogWithCategories } from "@/api/supabase";
import { getDynamicAssetsUrl } from "@/utils";

export const revalidate = 0;

export default async function Page({
  searchParams,
}: {
  searchParams?: { category: string | undefined };
}) {
  async function getData() {
    if (!searchParams?.category) {
      return await getAllBlog();
    }
    return await getAllBlogWithCategories(searchParams.category);
  }
  const blogs = await getData();
  return (
    <div className={style.blogs}>
      {(blogs ? blogs : []).map((blog) => {
        return (
          <section key={blog.id} className={style.blogs_content}>
            <Images
              alt={blog.title}
              src={getDynamicAssetsUrl(blog.attachment)}
              className={style.blogs_content_img}
              style={{
                objectFit: "cover",
              }}
            />
            <div>
              <Link href={`/blogs/${blog.title}`}>
                <h2 className={style.blogs_content_title}>{blog.title}</h2>
              </Link>
              <p className={style.blogs_content_desc}>
                {blog.content.filter((e) => e.type == "text")[0].content}
              </p>
              <ul className={style.blogs_content_categories}>
                {blog.tsg_blog_categories.map((category, i) => {
                  return (
                    <li key={i} className={style.link}>
                      <Link
                        href={`/blogs?category=${category.tsg_categories.name}`}
                      >
                        {category.tsg_categories.name}
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
