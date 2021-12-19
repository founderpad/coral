alter table "public"."interested_ideas" drop constraint "interested_ideas_pkey";
alter table "public"."interested_ideas"
    add constraint "interested_ideas_pkey" 
    primary key ( "id" );
