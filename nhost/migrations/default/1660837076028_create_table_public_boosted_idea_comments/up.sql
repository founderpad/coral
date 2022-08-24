CREATE TABLE "public"."boosted_idea_comments" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "idea_id" uuid NOT NULL, "user_id" uuid NOT NULL, "value" text NOT NULL, "status" text NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , FOREIGN KEY ("status") REFERENCES "public"."comment_status_types"("value") ON UPDATE restrict ON DELETE restrict, UNIQUE ("idea_id", "user_id"));COMMENT ON TABLE "public"."boosted_idea_comments" IS E'All boosted comments';
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
CREATE TRIGGER "set_public_boosted_idea_comments_updated_at"
BEFORE UPDATE ON "public"."boosted_idea_comments"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_boosted_idea_comments_updated_at" ON "public"."boosted_idea_comments" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
