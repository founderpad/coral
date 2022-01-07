CREATE TABLE public.user_followers (
    follower_id uuid,
    following_id uuid,
    status text,
    PRIMARY KEY (follower_id, following_id)
);
