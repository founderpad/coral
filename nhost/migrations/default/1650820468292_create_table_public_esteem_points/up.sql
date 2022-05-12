CREATE TABLE "public"."esteem_points" ("user_id" uuid NOT NULL, "points" integer NOT NULL DEFAULT 50, PRIMARY KEY ("user_id") , UNIQUE ("user_id"));
