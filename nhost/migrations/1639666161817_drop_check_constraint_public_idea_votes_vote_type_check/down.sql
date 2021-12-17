alter table "public"."idea_votes" add constraint "vote_type_check" check (CHECK (vote_type = 1 OR vote_type = '-1'::integer));
