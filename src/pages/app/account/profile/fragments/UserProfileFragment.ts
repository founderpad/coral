import { TUser_Profile } from "generated/api";
import gql from "graphql-tag";
import { useCurrentUser } from "hooks/auth";
import { cache } from "pages/_app";

const useProfileFragment = (): TUser_Profile => {
    const user = useCurrentUser();
    const result = cache.readFragment({
        id: `user_profile:${user.user_profile.id}`, // The value of the profile's cache id
        fragment: gql`
            fragment ExperienceFragment on user_profile {
                id
                background
                statement
                status
                availability
                startups
                skills
                resume
                specialist_industry
                business_description
                is_complete
            }
        `
    }) as TUser_Profile;

    return result;
}

export default useProfileFragment;