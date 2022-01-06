alter table "public"."idea_replies"
           add constraint "idea_replies_user_id_fkey"
           foreign key ("user_id")
           references "public"."users"
           ("id") on update restrict on delete restrict;
