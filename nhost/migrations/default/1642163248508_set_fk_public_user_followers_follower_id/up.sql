alter table "public"."user_followers"
  add constraint "user_followers_follower_id_fkey"
  foreign key ("follower_id")
  references "auth"."users"
  ("id") on update restrict on delete cascade;
