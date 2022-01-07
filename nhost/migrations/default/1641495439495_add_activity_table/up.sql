CREATE TABLE public.activity (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    user_id uuid NOT NULL,
    event text NOT NULL,
    description text NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    idea_id uuid,
    url text,
    type text
);
COMMENT ON TABLE public.activity IS 'The activity table of all users';
