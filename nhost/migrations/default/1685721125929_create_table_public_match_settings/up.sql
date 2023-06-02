CREATE TABLE "public"."match_settings" ("user_id" uuid NOT NULL, "looking_for" text, "type" text, "skills" Text[], PRIMARY KEY ("user_id") , UNIQUE ("user_id"));
