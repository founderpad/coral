alter table "public"."message_thread" drop constraint "message_thread_owner_id_fkey",
  add constraint "message_thread_owner_id_fkey"
  foreign key ("owner_id")
  references "auth"."users"
  ("id") on update restrict on delete restrict;
