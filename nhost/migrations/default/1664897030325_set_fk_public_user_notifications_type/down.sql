alter table "public"."user_notifications" drop constraint "user_notifications_type_fkey",
  add constraint "user_notifications_fkey"
  foreign key ("value")
  references "public"."notification_types"
  ("value") on update no action on delete no action;
