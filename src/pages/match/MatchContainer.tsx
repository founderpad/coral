import {
	TMatchSettingsFieldsFragment,
	TUsers,
	useMatchesQuery
} from '@/generated/api';
import React from 'react';
import LinkCard from '@/components/cards/LinkCard';
import { SimpleGrid, Tag } from '@chakra-ui/react';
import { AvatarWithDetails, NoResults } from '@/components/shared';
import MatchedSkills from '@/components/shared/match/MatchedSkills';
import UserMatchPreferences from '@/components/shared/match/UserMatchPreferences';
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

export const MatchContainer = (settings: TMatchSettingsFieldsFragment) => {
	const user = useUserData();
	const { data, loading } = useMatchesQuery({
		variables: {
			currentUserId: user?.id,
			userLookingFor: settings?.lookingFor ?? '',
			userProfileSkills: settings?.skills ?? []
		}
	});

	const users = sortByCommonSkills(
		(data?.users as TUsers[]) ?? [],
		settings?.skills
	);

	const hasResults = data?.users.length ?? 0;

	return (
		<>
			{settings?.lookingFor && <UserMatchPreferences {...settings} />}
			{!loading && hasResults < 1 ? (
				<NoResults />
			) : (
				<SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
					{users?.map((user) => (
						<React.Fragment key={user?.id}>
							<LinkCard
								href={`/user/${user?.id}`}
								cardProps={{ borderWidth: 1, rounded: 'md' }}
							>
								<AvatarWithDetails
									title={user.displayName}
									subtitle={
										<Tag size="sm">
											{user.matchSettings?.type}
										</Tag>
									}
									row
								/>
								<MatchedSkills
									authSkills={settings?.skills}
									skills={user.profile?.skills}
								/>
							</LinkCard>
						</React.Fragment>
					))}
				</SimpleGrid>
			)}
		</>
	);
};

export default MatchContainer;
