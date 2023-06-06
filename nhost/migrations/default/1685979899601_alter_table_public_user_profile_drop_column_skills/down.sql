comment on column "public"."user_profile"."skills" is E'The table for a user\'s profile details';
alter table "public"."user_profile" alter column "skills" drop not null;
alter table "public"."user_profile" add column "skills" jsonb;
