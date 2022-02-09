comment on column "public"."user_profile"."availability" is E'The table for a user\'s profile details';
alter table "public"."user_profile" alter column "availability" set default 0;
alter table "public"."user_profile" alter column "availability" drop not null;
alter table "public"."user_profile" add column "availability" int4;
