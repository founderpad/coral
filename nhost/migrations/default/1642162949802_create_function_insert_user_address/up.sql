CREATE FUNCTION public.insert_user_address() RETURNS trigger
LANGUAGE plpgsql
    AS $$
    BEGIN
        INSERT INTO public."user_address" ("user_id")
        VALUES (NEW."id");
    RETURN NEW;
    END;
    $$;
