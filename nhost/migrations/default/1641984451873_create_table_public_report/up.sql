CREATE TABLE "public"."report" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "from_user_id" uuid NOT NULL, "reported_user_id" uuid NOT NULL, "reported_id" uuid NOT NULL, "type" text NOT NULL, "content" text NOT NULL, "reason" text NOT NULL, "recipient_name" text NOT NULL, "recipient_email" text NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") );COMMENT ON TABLE "public"."report" IS E'The report table for all users, ideas, comments and replies';
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
CREATE TRIGGER "set_public_report_updated_at"
BEFORE UPDATE ON "public"."report"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_report_updated_at" ON "public"."report" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
