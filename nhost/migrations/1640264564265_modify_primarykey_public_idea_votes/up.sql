alter table "public"."idea_votes" drop constraint "idea_votes_pkey";
alter table "public"."idea_votes"
    add constraint "idea_votes_pkey" 
    primary key ( "idea_id", "user_id" );
