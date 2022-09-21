alter table "public"."withdrawal_requests" add constraint "amount_greater_than_ten" check (amount >= 10::money);
