-- Supabase AI is experimental and may produce incorrect answers
-- Always verify the output before executing
-- Supabase AI is experimental and may produce incorrect answers
-- Always verify the output before executing
create table if not exists tsg_categories (
    id bigint primary key generated always as identity,
    name text,
    created_at timestamp with time zone default timezone ('utc'::text, now()) not null,
    updated_at timestamp with time zone
);
create table if not exists tsg_blog (
    id bigint primary key generated always as identity,
    title text not null,
    content json [] not null,
    attachment text not null,
    created_at timestamp with time zone default timezone ('utc'::text, now()) not null,
    updated_at timestamp with time zone
);
create table if not exists tsg_blog_categories (
    id bigint primary key generated always as identity,
    blog_id bigint,
    category_id bigint,
    created_at timestamp with time zone default timezone ('utc'::text, now()) not null,
    updated_at timestamp with time zone,
    foreign key (blog_id) references tsg_blog (id),
    foreign key (category_id) references tsg_categories (id)
);