alter table "public"."withdrawal_requests"
  add constraint "withdrawal_requests_status_fkey"
  foreign key ("status")
  references "public"."comment_status_types"
  ("value") on update restrict on delete restrict;
