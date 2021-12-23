alter table "public"."idea_votes" add constraint "upvote_check" check (vote_type = 1 or vote_type = 0);
