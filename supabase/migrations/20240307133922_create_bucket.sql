insert into storage.buckets (id, name, public)
values ('tsg-blog-assets', 'tsg-blog-assets', true);
create policy "Allow authenticated uploads" on storage.objects for all to authenticated with check (bucket_id = 'tsg-blog-assets');
CREATE POLICY "allow everyone to view assets" ON storage.objects FOR
SELECT TO public USING (bucket_id = 'tsg-blog-assets');