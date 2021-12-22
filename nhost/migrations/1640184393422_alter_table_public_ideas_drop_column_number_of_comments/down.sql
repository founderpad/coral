ALTER TABLE "public"."ideas" ADD COLUMN "number_of_comments" int4;
ALTER TABLE "public"."ideas" ALTER COLUMN "number_of_comments" DROP NOT NULL;
ALTER TABLE "public"."ideas" ALTER COLUMN "number_of_comments" SET DEFAULT 4;
