alter table "public"."idea_comments" drop constraint "idea_comments_user_id_fkey",
          add constraint "idea_comments_user_id_fkey"
          foreign key ("user_id")
          references "public"."users"
          ("id")
          on update restrict
          on delete cascade;
