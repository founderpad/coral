alter table "public"."message_thread"
  add constraint "message_thread_id_fkey"
  foreign key ("id")
  references "public"."message"
  ("thread_id") on update restrict on delete cascade;
