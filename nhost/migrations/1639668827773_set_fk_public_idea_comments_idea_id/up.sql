alter table "public"."idea_comments"
           add constraint "idea_comments_idea_id_fkey"
           foreign key ("idea_id")
           references "public"."ideas"
           ("id") on update restrict on delete cascade;
