CREATE TABLE "public"."ideas" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "name" text NOT NULL, "description" text NOT NULL, "field" text NOT NULL, "user_id" uuid NOT NULL, "competitors" text, "team" text, "additional_information" text, "business_plan" text, "is_published" boolean NOT NULL DEFAULT false, "status" text, "total_interested" integer NOT NULL DEFAULT 0, "total_votes" integer NOT NULL DEFAULT 0, "total_comments" integer NOT NULL DEFAULT 0, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") );COMMENT ON TABLE "public"."ideas" IS E'The ideas created by all users';
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
CREATE TRIGGER "set_public_ideas_updated_at"
BEFORE UPDATE ON "public"."ideas"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_ideas_updated_at" ON "public"."ideas" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
