import { TUsers, useMatchesQuery } from '@/generated/api';
import { useUserData } from '@nhost/react';

export const sortByCommonSkills = (
	foundUsers: TUsers[],
	matchSkills: string[]
): TUsers[] => {
	const res = [...foundUsers]
		.sort((a: TUsers, b: TUsers): number => {
			const aSkills = (a.profile?.skills as string[]) || [];
			const bSkills = (b.profile?.skills as string[]) || [];

			// Calculate the number of common skills
			const aCommonSkills = aSkills.filter((skill) =>
				matchSkills.includes(skill)
			);
			const bCommonSkills = bSkills.filter((skill) =>
				matchSkills.includes(skill)
			);

			// Sort by the greatest number of common skills
			if (bCommonSkills.length !== aCommonSkills.length) {
				return bCommonSkills.length - aCommonSkills.length;
			}

			// If the number of common skills is the same, sort alphabetically
			const sortedCommonSkillsA = [...aCommonSkills].sort();
			const sortedCommonSkillsB = [...bCommonSkills].sort();
			const commonSkillsComparison = sortedCommonSkillsA
				.join('')
				.localeCompare(sortedCommonSkillsB.join(''));

			// If the common skills are different, return the comparison result
			if (commonSkillsComparison !== 0) {
				return commonSkillsComparison;
			}

			// If the common skills are the same, sort based on all skills
			return aSkills.join('').localeCompare(bSkills.join(''));
		})
		.map((user) => ({ ...user }));

	return res;
};

export const useMatch = (lookingFor: string, skills: string[]) => {
	const user = useUserData();

	const { data, loading } = useMatchesQuery({
		variables: {
			currentUserId: user?.id,
			userLookingFor: lookingFor ?? '',
			userProfileSkills: skills ?? []
		}
	});

	return {
		data: sortByCommonSkills((data?.users as TUsers[]) ?? [], skills),
		loading
	};
};

export default useMatch;
