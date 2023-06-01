alter table "public"."matchmake_preferences" drop constraint "matchmake_preferences_user_id_fkey1",
  add constraint "matchmake_preferences_user_id_fkey"
  foreign key ("user_id")
  references "auth"."users"
  ("id") on update restrict on delete cascade;
