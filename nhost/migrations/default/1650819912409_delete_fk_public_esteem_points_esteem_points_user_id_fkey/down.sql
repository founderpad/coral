alter table "public"."esteem_points"
  add constraint "esteem_points_user_id_fkey"
  foreign key ("user_id")
  references "auth"."users"
  ("id") on update restrict on delete restrict;
