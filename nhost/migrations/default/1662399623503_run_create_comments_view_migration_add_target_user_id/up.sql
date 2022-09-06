CREATE OR REPLACE VIEW "public"."v_comments" AS 
 SELECT idea_comments.id,
    idea_comments.user_id,
        CASE
            WHEN (idea_comments.status = 'PENDING'::text) THEN 'Pending approval...'::text
            ELSE idea_comments.value
        END AS value,
    idea_comments.created_at,
    idea_comments.updated_at,
    idea_comments.status,
    idea_comments.idea_id,
    idea_comments.is_boost,
    idea_comments.target_user_id,
    idea_comments.total_replies
   FROM idea_comments
  WHERE (idea_comments.status <> 'REJECTED'::text);
