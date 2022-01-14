alter table "public"."user_profile"
  add constraint "user_profile_user_id_fkey"
  foreign key ("user_id")
  references "auth"."users"
  ("id") on update restrict on delete cascade;
