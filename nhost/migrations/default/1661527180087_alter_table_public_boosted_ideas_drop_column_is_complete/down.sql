comment on column "public"."boosted_ideas"."is_complete" is E'All ideas that are currently boosted';
alter table "public"."boosted_ideas" alter column "is_complete" set default false;
alter table "public"."boosted_ideas" alter column "is_complete" drop not null;
alter table "public"."boosted_ideas" add column "is_complete" bool;
