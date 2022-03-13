alter table "public"."message" drop constraint "message_sender_user_id_fkey",
  add constraint "message_sender_user_id_fkey"
  foreign key ("sender_user_id")
  references "auth"."users"
  ("id") on update restrict on delete cascade;
