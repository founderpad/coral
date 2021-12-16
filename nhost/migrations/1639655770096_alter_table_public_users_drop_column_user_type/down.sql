ALTER TABLE "public"."users" ADD COLUMN "user_type" text;
ALTER TABLE "public"."users" ALTER COLUMN "user_type" DROP NOT NULL;
