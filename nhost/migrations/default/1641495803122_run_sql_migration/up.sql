CREATE TRIGGER set_public_idea_comments_updated_at BEFORE UPDATE ON public.idea_comments FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_idea_comments_updated_at ON public.idea_comments IS 'trigger to set value of column "updated_at" to current timestamp on row update';

CREATE TRIGGER set_public_idea_replies_updated_at BEFORE UPDATE ON public.idea_comment_replies FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_idea_replies_updated_at ON public.idea_comment_replies IS 'trigger to set value of column "updated_at" to current timestamp on row update';

CREATE TRIGGER set_public_idea_votes_updated_at BEFORE UPDATE ON public.idea_votes FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_idea_votes_updated_at ON public.idea_votes IS 'trigger to set value of column "updated_at" to current timestamp on row update';

CREATE TRIGGER set_public_interested_ideas_updated_at BEFORE UPDATE ON public.interested_ideas FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_interested_ideas_updated_at ON public.interested_ideas IS 'trigger to set value of column "updated_at" to current timestamp on row update';

CREATE TRIGGER set_public_report_updated_at BEFORE UPDATE ON public.report FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_report_updated_at ON public.report IS 'trigger to set value of column "updated_at" to current timestamp on row update';
