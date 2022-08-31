alter table "public"."idea_comments"
  add constraint "idea_comments_status_fkey"
  foreign key ("status")
  references "public"."comment_status_types"
  ("value") on update restrict on delete restrict;
