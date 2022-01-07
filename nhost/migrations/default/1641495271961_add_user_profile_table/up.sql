CREATE TABLE public.user_profile (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    availability integer DEFAULT 0,
    background text,
    statement text,
    website text,
    linkedin text,
    twitter text,
    resume text,
    user_id uuid,
    status text,
    startups integer DEFAULT 0,
    business_description text,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now(),
    industries jsonb,
    is_complete boolean DEFAULT false,
    skills jsonb,
    specialist_industry text,
    instagram text,
    facebook text
);
COMMENT ON TABLE public.user_profile IS 'User profile table';
