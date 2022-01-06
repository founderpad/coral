ALTER TABLE "public"."idea_votes" ADD COLUMN "vote_type" int4;
ALTER TABLE "public"."idea_votes" ALTER COLUMN "vote_type" DROP NOT NULL;
