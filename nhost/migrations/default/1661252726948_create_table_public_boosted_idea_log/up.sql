CREATE TABLE "public"."boosted_idea_log" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "idea_id" uuid NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") );COMMENT ON TABLE "public"."boosted_idea_log" IS E'All the times an idea was boosted';
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_boosted_idea_log_updated_at"
BEFORE UPDATE ON "public"."boosted_idea_log"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_boosted_idea_log_updated_at" ON "public"."boosted_idea_log" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
