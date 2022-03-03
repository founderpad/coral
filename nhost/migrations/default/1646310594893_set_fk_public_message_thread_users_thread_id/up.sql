alter table "public"."message_thread_users" drop constraint "message_thread_users_thread_id_fkey",
  add constraint "message_thread_users_thread_id_fkey"
  foreign key ("thread_id")
  references "public"."message_thread"
  ("id") on update restrict on delete cascade;
