import { TUser_Profile } from '@generated/api';
import { useCurrentUser } from '@/hooks/auth';
import { cache } from '@/pages/_app';
import gql from 'graphql-tag';

const useProfileFragment = (): TUser_Profile => {
	const profileId = useCurrentUser()?.profile?.id;
	const result = cache.readFragment({
		id: `user_profile:${profileId}`, // The value of the profile's cache id
		fragment: gql`
			fragment ExperienceFragment on user_profile {
				id
				objective
				background
				statement
				status
				availability
				startups
				skills
				resume
				specialistIndustry
				businessDescription
				isComplete
			}
		`
	}) as TUser_Profile;

	return result;
};

export default useProfileFragment;
