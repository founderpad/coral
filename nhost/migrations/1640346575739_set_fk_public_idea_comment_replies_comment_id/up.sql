alter table "public"."idea_comment_replies"
           add constraint "idea_comment_replies_comment_id_fkey"
           foreign key ("comment_id")
           references "public"."idea_comments"
           ("id") on update restrict on delete restrict;
