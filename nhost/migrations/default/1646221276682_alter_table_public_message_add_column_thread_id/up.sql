CREATE EXTENSION IF NOT EXISTS pgcrypto;
alter table "public"."message" add column "thread_id" uuid
 not null default gen_random_uuid();
