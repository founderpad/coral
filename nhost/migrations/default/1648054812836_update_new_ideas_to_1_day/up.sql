CREATE OR REPLACE VIEW "public"."idea_preview" AS 
 SELECT ideas.id,
    ideas.user_id,
    ideas.name,
    ideas.status,
    ideas.created_at,
    ideas.is_published,
    ideas.summary,
    ideas.field,
        CASE
            WHEN (ideas.created_at > (now() - '1 days'::interval)) THEN true
            ELSE false
        END AS is_new
   FROM ideas;
