alter table "public"."boosted_ideas" drop constraint "remaining_currency_greater_equal_than_zero";
alter table "public"."boosted_ideas" add constraint "remaining_currency_greater_equal_than_zero" check (CHECK (remaining_currency_amount >= 0::money));
