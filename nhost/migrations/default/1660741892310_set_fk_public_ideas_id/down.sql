alter table "public"."ideas" drop constraint "ideas_id_fkey",
  add constraint "ideas_id_fkey"
  foreign key ("id")
  references "public"."boosted_ideas"
  ("idea_id") on update restrict on delete restrict;
