alter table "public"."message" add constraint "message_thread_id_key" unique ("thread_id");
alter table "public"."message" alter column "thread_id" set default gen_random_uuid();
