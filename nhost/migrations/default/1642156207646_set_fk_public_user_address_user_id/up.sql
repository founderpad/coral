alter table "public"."user_address"
  add constraint "user_address_user_id_fkey"
  foreign key ("user_id")
  references "auth"."users"
  ("id") on update restrict on delete cascade;
