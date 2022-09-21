alter table "public"."withdrawal_requests" add column "status" text
 not null default 'PENDING';
