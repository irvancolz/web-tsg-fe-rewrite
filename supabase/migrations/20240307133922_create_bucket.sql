insert into storage.buckets (id, name, public)
values ('tsg-blog-assets', 'tsg-blog-assets', true);
create policy "Allow authenticated uploads" on storage.objects for all to authenticated with check (bucket_id = 'tsg-blog-assets');
create policy "Allow everybody to access" on storage.objects for
select to anon