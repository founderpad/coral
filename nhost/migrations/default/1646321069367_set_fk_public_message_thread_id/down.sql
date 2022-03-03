alter table "public"."message" drop constraint "message_thread_id_fkey",
  add constraint "message_thread_id_fkey"
  foreign key ("thread_id")
  references "public"."message_thread"
  ("id") on update restrict on delete restrict;
