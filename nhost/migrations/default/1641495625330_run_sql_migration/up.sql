CREATE TRIGGER set_public_activity_updated_at BEFORE UPDATE ON public.activity FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
