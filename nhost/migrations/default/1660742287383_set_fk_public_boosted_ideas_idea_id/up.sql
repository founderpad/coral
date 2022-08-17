alter table "public"."boosted_ideas"
  add constraint "boosted_ideas_idea_id_fkey"
  foreign key ("idea_id")
  references "public"."ideas"
  ("id") on update restrict on delete cascade;
