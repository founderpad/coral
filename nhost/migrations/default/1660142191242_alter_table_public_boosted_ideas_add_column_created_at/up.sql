alter table "public"."boosted_ideas" add column "created_at" timestamptz
 null default now();
