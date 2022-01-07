BEGIN TRANSACTION;
ALTER TABLE "public"."idea_votes" DROP CONSTRAINT "idea_votes_pkey";

ALTER TABLE "public"."idea_votes"
    ADD CONSTRAINT "idea_votes_pkey" PRIMARY KEY ("user_id", "idea_id");
COMMIT TRANSACTION;
