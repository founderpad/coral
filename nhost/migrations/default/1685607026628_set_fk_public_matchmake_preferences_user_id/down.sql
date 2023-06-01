alter table "public"."matchmake_preferences" drop constraint "matchmake_preferences_user_id_fkey",
  add constraint "matchmake_preferences_user_id_fkey1"
  foreign key ("user_id")
  references "auth"."users"
  ("id") on update restrict on delete restrict;
