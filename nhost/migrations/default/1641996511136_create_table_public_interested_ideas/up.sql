CREATE TABLE "public"."interested_ideas" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "idea_id" uuid NOT NULL, "user_id" uuid NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("idea_id","user_id") );COMMENT ON TABLE "public"."interested_ideas" IS E'The table to store all ideas users are interested in';
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
CREATE TRIGGER "set_public_interested_ideas_updated_at"
BEFORE UPDATE ON "public"."interested_ideas"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_interested_ideas_updated_at" ON "public"."interested_ideas" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
