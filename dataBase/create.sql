create schema post;

create table blogPost {
    id serial primary key,
    title text not null,
    content text not null,
    date timestamp default now()
}; 