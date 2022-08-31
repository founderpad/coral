CREATE OR REPLACE FUNCTION boosted_idea_completed_at_fnc()
    RETURNS trigger AS $BODY$
    BEGIN
        UPDATE boosted_ideas
            SET completed_at = now()
        WHERE OLD.idea_id = NEW.idea_id
        AND OLD.id = NEW.id
        AND OLD.remaining_currency_amount = '$0.00'::money;
    RETURN NEW;
    END;
$BODY$ LANGUAGE plpgsql;
    
CREATE TRIGGER boosted_idea_completed_at_trigger
    AFTER UPDATE
    ON boosted_ideas
    FOR EACH ROW
    EXECUTE PROCEDURE boosted_idea_completed_at_fnc();
