ALTER TABLE ONLY public.idea_comments
    ADD CONSTRAINT idea_comments_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
