alter table "public"."idea_votes" drop constraint "upvote_check";
alter table "public"."idea_votes" add constraint "upvote_check" check (vote_type = 1 OR vote_type = 0::integer);
