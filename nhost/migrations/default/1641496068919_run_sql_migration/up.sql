ALTER TABLE ONLY public.idea_comment_replies
    ADD CONSTRAINT idea_replies_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.idea_votes
    ADD CONSTRAINT idea_votes_idea_id_user_id_key UNIQUE (idea_id, user_id);
