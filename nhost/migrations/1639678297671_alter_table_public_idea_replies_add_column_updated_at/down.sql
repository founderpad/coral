DROP TRIGGER IF EXISTS "set_public_idea_replies_updated_at" ON "public"."idea_replies";
ALTER TABLE "public"."idea_replies" DROP COLUMN "updated_at";
