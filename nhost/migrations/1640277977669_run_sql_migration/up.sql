CREATE OR REPLACE FUNCTION public.is_new_idea(idea_row ideas)
    RETURNS text
    LANGUAGE sql
    STABLE
AS $function$
    -- SELECT idea_row.created_at,
    --     CASE
    --         WHEN (idea_row.created_at > (now() - '7 days' :: interval)) THEN true
    --         ELSE false
    --     END AS is_new
    -- BEGIN;
    -- IF (idea_row.created_at > (now() - '7 days' :: interval)) RETURN TRUE
    -- RETURN FALSE
    SELECT idea_row.name
$function$;
