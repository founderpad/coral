alter table "public"."user_profile" drop constraint "user_profile_user_id_fkey",
  add constraint "user_profile_user_id_fkey"
  foreign key ("user_id")
  references "auth"."users"
  ("id") on update restrict on delete cascade;
