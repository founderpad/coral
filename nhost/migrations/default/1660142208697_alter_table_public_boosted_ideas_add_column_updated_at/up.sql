alter table "public"."boosted_ideas" add column "updated_at" timestamptz
 null default now();
