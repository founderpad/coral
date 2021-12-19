CREATE OR REPLACE VIEW "public"."idea_preview" AS 
 SELECT ideas.id,
    ideas.user_id,
    ideas.name,
    ideas.status,
    ideas.created_at,
    ideas.interested,
    "substring"(ideas.description, 1, 175) AS preview,
    ideas.field,
        CASE
            WHEN (ideas.created_at > (now() - '7 days'::interval)) THEN true
            ELSE false
        END AS is_new
   FROM ideas;
