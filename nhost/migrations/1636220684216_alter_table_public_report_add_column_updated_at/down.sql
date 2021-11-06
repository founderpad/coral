DROP TRIGGER IF EXISTS "set_public_report_updated_at" ON "public"."report";
ALTER TABLE "public"."report" DROP COLUMN "updated_at";
