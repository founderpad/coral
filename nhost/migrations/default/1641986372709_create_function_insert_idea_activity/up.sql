CREATE FUNCTION public.create_idea_activity_func() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
        DECLARE link TEXT;
        BEGIN
            link := CONCAT('/idea/', NEW."id");
            INSERT INTO public."activity" ("user_id", "idea_id", "event", "description", "url", "type")
            VALUES (NEW."user_id", NEW."id", 'NEW IDEA', 'Created a new idea', link, 'idea');
        RETURN NEW;
        END;
        $$;
