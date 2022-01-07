COMMENT ON TABLE public.ideas IS 'Ideas table';
CREATE TABLE public.interested_ideas (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    idea_id uuid NOT NULL,
    user_id uuid NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);
