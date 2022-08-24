CREATE FUNCTION boosted_idea_insert_log_trigger_fnc()
    RETURNS trigger AS $BODY$
    BEGIN
        INSERT INTO "boosted_idea_log" ("idea_id") VALUES(NEW."idea_id");
    RETURN NEW;
    END;
    $BODY$ LANGUAGE plpgsql;


    CREATE TRIGGER boosted_idea_insert_log_trigger
    AFTER INSERT
    ON "boosted_ideas"
    FOR EACH ROW
    EXECUTE PROCEDURE boosted_idea_insert_log_trigger_fnc();
