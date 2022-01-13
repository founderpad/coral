CREATE TRIGGER insert_create_idea_activity BEFORE INSERT ON public.ideas FOR EACH ROW EXECUTE FUNCTION public.create_idea_activity_func();
