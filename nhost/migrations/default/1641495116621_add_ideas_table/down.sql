-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- CREATE TABLE public.ideas (
--     id uuid DEFAULT public.gen_random_uuid() NOT NULL,
--     name text NOT NULL,
--     description text NOT NULL,
--     field text NOT NULL,
--     user_id uuid NOT NULL,
--     created_at timestamp with time zone DEFAULT now(),
--     updated_at timestamp with time zone DEFAULT now(),
--     competitors text,
--     team text,
--     mission_statement text,
--     additional_information text,
--     business_plan text,
--     is_published boolean DEFAULT false,
--     description_preview character varying(100) GENERATED ALWAYS AS ("substring"(description, 1, 100)) STORED,
--     status text,
--     total_interested integer DEFAULT 0,
--     total_upvotes integer DEFAULT 0,
--     total_comments integer DEFAULT 0
-- );
