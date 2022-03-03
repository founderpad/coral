alter table "public"."message_thread_users"
  add constraint "message_thread_users_user_id_fkey"
  foreign key ("user_id")
  references "auth"."users"
  ("id") on update restrict on delete cascade;
