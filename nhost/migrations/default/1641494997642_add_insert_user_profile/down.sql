-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- CREATE FUNCTION public.insert_user_profile_func() RETURNS trigger
--     LANGUAGE plpgsql
--     AS $$
--     BEGIN
--         INSERT INTO "user_profile" ("user_id")
--         VALUES (NEW."id");
--     RETURN NEW;
--     END;
--     $$;