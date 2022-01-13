CREATE TABLE "public"."user_profile" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "availability" integer NOT NULL DEFAULT 0, "background" text NOT NULL, "statement" text NOT NULL, "industries" jsonb NOT NULL, "status" text NOT NULL, "startups" integer NOT NULL DEFAULT 0, "business_description" text NOT NULL, "skills" jsonb NOT NULL, "specialist_industry" text NOT NULL, "instagram" text NOT NULL, "facebook" text NOT NULL, "twitter" text NOT NULL, "linkedin" text NOT NULL, "website" text NOT NULL, "resume" text NOT NULL, "is_complete" boolean NOT NULL DEFAULT false, "user_id" uuid NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") );COMMENT ON TABLE "public"."user_profile" IS E'The table for a user\'s profile details';
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
CREATE TRIGGER "set_public_user_profile_updated_at"
BEFORE UPDATE ON "public"."user_profile"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_user_profile_updated_at" ON "public"."user_profile" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
