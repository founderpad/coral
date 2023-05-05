CREATE FUNCTION public.insert_user_matchmake_settings_func() RETURNS trigger
LANGUAGE plpgsql
    AS $$
    BEGIN
        INSERT INTO public."matchmake_preferences" ("user_id")
        VALUES (NEW."id");
    RETURN NEW;
    END;
    $$;


CREATE TRIGGER insert_user_matchmake_settings AFTER INSERT ON auth.users FOR EACH ROW EXECUTE FUNCTION public.insert_user_matchmake_settings_func();
