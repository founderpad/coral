ALTER TABLE ONLY public.idea_comment_replies
    ADD CONSTRAINT idea_replies_comment_id_fkey FOREIGN KEY (comment_id) REFERENCES public.idea_comments(id) ON UPDATE RESTRICT ON DELETE CASCADE;
