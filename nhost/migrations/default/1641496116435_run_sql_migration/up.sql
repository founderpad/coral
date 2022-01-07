ALTER TABLE ONLY public.interested_ideas
    ADD CONSTRAINT interested_ideas_pkey PRIMARY KEY (idea_id, user_id);
ALTER TABLE ONLY public.report
    ADD CONSTRAINT report_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.user_profile
    ADD CONSTRAINT user_profile_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.user_profile
    ADD CONSTRAINT user_profile_user_id_key UNIQUE (user_id);
