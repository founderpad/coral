-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- CREATE FUNCTION insert_profile_not_set_trigger_fnc()
--     RETURNS trigger AS $BODY$
--     BEGIN
--         INSERT INTO user_notifications ("user_id", "type", "value", "href", "description") VALUES (NEW."id", 'PROFILE_NOT_SET', 'Your profile is not set', '/account/profile', 'Please set your profile');
--     RETURN NEW;
--     END;
--     $BODY$ LANGUAGE plpgsql;
--
--
--     CREATE TRIGGER insert_profile_not_set_trigger
--     AFTER INSERT
--     ON auth.users
--     FOR EACH ROW
--     EXECUTE PROCEDURE insert_profile_not_set_trigger_fnc();