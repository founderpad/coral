import { TMatchSettingsFieldsFragment } from '@/generated/api';
import React from 'react';
import LinkCard from '@/components/cards/Card';
import { SimpleGrid, Tag } from '@chakra-ui/react';
import { AvatarWithDetails, NoResults } from '@/components/shared';
import MatchedSkills from '@/components/shared/match/MatchedSkills';
import UserMatchPreferences from '@/components/shared/match/UserMatchPreferences';
import { useMatch } from '@/features/match';

export const MatchContainer = (settings: TMatchSettingsFieldsFragment) => {
	const { data, loading } = useMatch(
		settings?.lookingFor ?? '',
		settings?.skills
	);

	const hasResults = data.length ?? 0;

	return (
		<>
			{settings?.lookingFor && <UserMatchPreferences {...settings} />}
			{!loading && hasResults < 1 ? (
				<NoResults />
			) : (
				<SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
					{data?.map((user) => (
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
