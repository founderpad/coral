alter table "public"."idea_comment_replies" add foreign key ("comment_id") references "public"."idea_comments"("id") on update restrict on delete cascade;
