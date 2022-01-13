CREATE TABLE "public"."idea_votes" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "idea_id" uuid NOT NULL, "user_id" uuid NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("user_id","idea_id") );COMMENT ON TABLE "public"."idea_votes" IS E'The table to store all ideas';
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
CREATE TRIGGER "set_public_idea_votes_updated_at"
BEFORE UPDATE ON "public"."idea_votes"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_idea_votes_updated_at" ON "public"."idea_votes" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
