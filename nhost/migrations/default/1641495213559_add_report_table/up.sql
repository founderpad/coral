CREATE TABLE public.report (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    from_user_id uuid,
    reported_user_id uuid,
    reported_id uuid,
    type text,
    reason text,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    recipient_email public.citext,
    recipient_name text,
    content text
);
