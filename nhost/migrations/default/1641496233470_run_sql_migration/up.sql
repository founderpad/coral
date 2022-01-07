ALTER TABLE ONLY public.idea_comment_replies
    ADD CONSTRAINT idea_replies_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
