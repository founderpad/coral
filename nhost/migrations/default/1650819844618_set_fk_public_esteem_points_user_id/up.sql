alter table "public"."esteem_points" drop constraint "esteem_points_user_id_fkey",
  add constraint "esteem_points_user_id_fkey"
  foreign key ("user_id")
  references "auth"."users"
  ("id") on update restrict on delete restrict;
