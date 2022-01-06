CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."idea_replies"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "comment_id" uuid NOT NULL, "user_id" uuid NOT NULL, "value" text NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("comment_id") REFERENCES "public"."idea_comments"("id") ON UPDATE restrict ON DELETE cascade, UNIQUE ("id"));
