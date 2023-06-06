alter table "public"."match_settings" alter column "skills" drop not null;
alter table "public"."match_settings" add column "skills" jsonb;
