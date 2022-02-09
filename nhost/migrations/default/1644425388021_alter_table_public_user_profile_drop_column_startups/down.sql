comment on column "public"."user_profile"."startups" is E'The table for a user\'s profile details';
alter table "public"."user_profile" alter column "startups" set default 0;
alter table "public"."user_profile" alter column "startups" drop not null;
alter table "public"."user_profile" add column "startups" int4;
