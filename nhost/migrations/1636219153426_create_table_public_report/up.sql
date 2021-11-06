CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."report"("id" uuid NOT NULL DEFAULT gen_random_uuid(), PRIMARY KEY ("id") , UNIQUE ("id"));
