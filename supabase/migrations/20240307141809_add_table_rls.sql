CREATE POLICY "Enable read access for all users" ON "public"."tsg_blog" AS PERMISSIVE FOR
SELECT TO public USING (true);
CREATE POLICY "Enable read access for all users" ON "public"."tsg_categories" AS PERMISSIVE FOR
SELECT TO public USING (true);
CREATE POLICY "Enable read access for all users" ON "public"."tsg_blog_categories" AS PERMISSIVE FOR
SELECT TO public USING (true);
CREATE POLICY "Allow authenticated user to manage blogs" ON "public"."tsg_blog" AS PERMISSIVE FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow authenticated user to manage blogs" ON "public"."tsg_categories" AS PERMISSIVE FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "Allow authenticated user to manage blogs" ON "public"."tsg_blog_categories" AS PERMISSIVE FOR ALL TO authenticated USING (true) WITH CHECK (true);