CREATE TABLE "public"."user_address" ("user_id" uuid NOT NULL, "location" text NOT NULL, "country" text NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("user_id") , UNIQUE ("user_id"));COMMENT ON TABLE "public"."user_address" IS E'The table to store the address for all users';
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
CREATE TRIGGER "set_public_user_address_updated_at"
BEFORE UPDATE ON "public"."user_address"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_user_address_updated_at" ON "public"."user_address" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
