CREATE FUNCTION public.insert_user_profile_func() RETURNS trigger
LANGUAGE plpgsql
    AS $$
    BEGIN
        INSERT INTO public."user_profile" ("user_id")
        VALUES (NEW."id");
    RETURN NEW;
    END;
    $$;
