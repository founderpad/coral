ALTER TABLE ONLY public.idea_comments
    ADD CONSTRAINT idea_comments_idea_id_fkey FOREIGN KEY (idea_id) REFERENCES public.ideas(id) ON UPDATE RESTRICT ON DELETE CASCADE;
