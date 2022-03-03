alter table "public"."message"
  add constraint "message_sender_user_id_fkey"
  foreign key ("sender_user_id")
  references "auth"."users"
  ("id") on update restrict on delete restrict;
