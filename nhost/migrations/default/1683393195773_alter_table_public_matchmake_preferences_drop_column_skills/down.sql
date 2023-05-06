alter table "public"."matchmake_preferences" alter column "skills" drop not null;
alter table "public"."matchmake_preferences" add column "skills" text;
