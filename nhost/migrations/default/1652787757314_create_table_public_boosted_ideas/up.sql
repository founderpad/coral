CREATE TABLE "public"."boosted_ideas" ("idea_id" uuid NOT NULL, "remaining_points" integer, "remaining_amount" money, "points_increment" integer NOT NULL DEFAULT 10, "amount_increment" money NOT NULL DEFAULT 0.05, PRIMARY KEY ("idea_id") , UNIQUE ("idea_id"));COMMENT ON TABLE "public"."boosted_ideas" IS E'All ideas that are currently boosted';
