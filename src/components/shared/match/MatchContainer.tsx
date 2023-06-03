import { useMatchesQuery } from '@/generated/api';
import { useCurrentUser } from '@/hooks/auth';
import { useAuth } from '@/hooks/auth';
import React, { memo } from 'react';
import LinkCard from '@/components/cards/LinkCard';
import { FlexLayout, StackLayout } from '@/components/layouts';
import { Button, Tag } from '@chakra-ui/react';
import { NoResults } from '../NoResults';
import { UserAvatarDetails } from '../UserAvatar';
import { Label } from '@/components/labels';
import BasePopover from '@/components/popover/BasePopover';
import { useMobile } from '@/hooks/util';

const SkillsPopover = ({
	value,
	skillsList
}: {
	value: string;
	skillsList: string[];
}) => {
	return (
		<BasePopover
			placement="bottom-start"
			triggerEl={
				<Button size="xs" variant="link">
					{value}
				</Button>
			}
		>
			{skillsList.map((skill) => (
				<Tag key={skill} size="sm" mr={1} mb={1}>
					{skill}
				</Tag>
			))}
		</BasePopover>
	);
};

const LookingForSkills = memo(({ skills }: { skills: string }) => {
	const skillsList = skills.split(',').map((skill) => skill.trim());
	const firstThreeSkills = skillsList.slice(0, 3);
	const remainingSkillsCount = skillsList.length - 3;

	return (
		<>
			{firstThreeSkills.map((skill) => (
				<Tag key={skill} size="sm">
					{skill}
				</Tag>
			))}
			{remainingSkillsCount > 0 && (
				<SkillsPopover
					value={` +${remainingSkillsCount} more`}
					skillsList={skillsList}
				/>
			)}
		</>
	);
});

const UserPreferences = () => {
	const authUser = useCurrentUser();
	const isMobile = useMobile();

	return (
		<StackLayout
			flexDirection={{ base: 'column', sm: 'row' }}
			p={2}
			spacing={{ base: 0, sm: 2 }}
			alignItems={{ base: 'start', sm: 'center' }}
			borderWidth="1px"
			rounded="md"
			direction="row"
		>
			{authUser.matchSettings?.type && (
				<Tag size="sm">{authUser.matchSettings?.type}</Tag>
			)}

			{authUser.matchSettings?.lookingFor && (
				<>
					<Label fontSize="xs">Looking for</Label>
					<Tag size="sm">{authUser.matchSettings?.lookingFor}</Tag>
				</>
			)}

			{authUser.matchSettings?.skills && (
				<>
					{!isMobile ? (
						<Label fontSize="xs">With skills</Label>
					) : (
						<SkillsPopover
							value="With 20 skills"
							skillsList={
								authUser.matchSettings?.skills
									.split(',')
									.map((skill) => skill.trim()) ?? []
							}
						/>
					)}
					{!isMobile && (
						<LookingForSkills
							skills={authUser.matchSettings?.skills ?? ''}
						/>
					)}
				</>
			)}
		</StackLayout>
	);
};

export const MatchContainer = () => {
	const authUser = useCurrentUser();

	const { data, loading } = useMatchesQuery({
		variables: {
			currentUserId: useAuth().getUser()?.id,
			lookingFor: authUser.matchSettings?.type ?? '',
			skills: authUser.profile?.skills ?? []
		}
	});

	const hasResults = data?.users.length ?? 0;

	return (
		<React.Fragment>
			<UserPreferences />
			{!loading && hasResults < 1 ? (
				<NoResults back />
			) : (
				<StackLayout>
					{data?.users?.map((user) => (
						<React.Fragment key={user?.id}>
							<LinkCard
								href={`/user/${user?.id}`}
								footer={
									<StackLayout direction="row" spacing="2">
										{user.profile?.skills.map(
											(skill: any) => {
												if (
													authUser.profile?.skills.includes(
														skill
													)
												) {
													return (
														<Tag
															size="sm"
															key={skill}
															bgColor={
																authUser.profile?.skills.includes(
																	skill
																)
																	? 'fpPrimary.500'
																	: 'inherit'
															}
															color={
																authUser.profile?.skills.includes(
																	skill
																)
																	? 'white'
																	: 'initial'
															}
														>
															{skill}
														</Tag>
													);
												} else {
													return (
														<Tag
															size="sm"
															key={skill}
															variant="subtle"
														>
															{skill}
														</Tag>
													);
												}
											}
										)}
									</StackLayout>
								}
							>
								<UserAvatarDetails
									src={user.avatarUrl ?? undefined}
									title={user?.displayName}
									subtitle={
										<FlexLayout
											alignItems="center"
											flexDirection="column"
										>
											<Tag>
												{user.matchSettings?.type}
											</Tag>
										</FlexLayout>
									}
									size="md"
								/>
							</LinkCard>
						</React.Fragment>
					))}
				</StackLayout>
			)}
		</React.Fragment>
	);
};

export default MatchContainer;
