ALTER TABLE ONLY public.idea_votes
    ADD CONSTRAINT idea_votes_idea_id_fkey FOREIGN KEY (idea_id) REFERENCES public.ideas(id) ON UPDATE CASCADE ON DELETE CASCADE;
