import { Badge, Tag } from '@chakra-ui/react';
import LinkCard from '@components/cards/LinkCard';
import { FlexLayout } from '@components/layouts';
import { PointSeparator, UserAvatarDetails } from '@components/shared';
import PronounsLabel from '@components/shared/PronounsLabel';
import { TUserSearchFragment } from '@generated/api';
import React, { memo } from 'react';

const userAttrs = (userProfileAttrs: TUserSearchFragment): Array<string> => {
	const attrs: string[] = [];

	if (userProfileAttrs['availability'])
		attrs.push(
			`Can commit ${userProfileAttrs['availability']} hours per week`
		);

	if (userProfileAttrs['specialistIndustry'])
		attrs.push(
			`Specialises in ${userProfileAttrs[
				'specialistIndustry'
			].toLowerCase()} `
		);

	if (userProfileAttrs['status']) attrs.push(`${userProfileAttrs['status']}`);

	if (userProfileAttrs['startups'])
		attrs.push(`Worked with ${userProfileAttrs['startups']}`);

	if (userProfileAttrs['skills'])
		attrs.push(`Has ${userProfileAttrs['skills'].length} skill(s)`);

	return attrs;
};

const UserProfileAttributes = (userProfileAttrs: TUserSearchFragment) => {
	if (!userAttrs(userProfileAttrs).length) return null;

	return (
		<FlexLayout flexWrap="wrap" direction="row" alignItems="center" pt={4}>
			{userAttrs(userProfileAttrs).map((attr) => (
				<Tag fontSize="xs" size="sm" mr={1} mb={1} key={attr}>
					{attr}
				</Tag>
			))}
		</FlexLayout>
	);
};

const UserCard = (userProfile: TUserSearchFragment) => (
	<LinkCard href={`/user/${userProfile?.user?.id}`}>
		<UserAvatarDetails
			src={userProfile?.user?.avatarUrl || undefined}
			title={userProfile?.user?.displayName}
			subtitle={
				<FlexLayout alignItems="center" flexDirection="column">
					<FlexLayout alignItems="center">
						{userProfile?.user?.address?.country}
						<PointSeparator small />
						<Badge
							colorScheme="fpPrimary"
							textTransform="inherit"
							variant="solid"
							fontWeight="normal"
							rounded="md"
							fontSize="xs"
						>
							{userProfile?.objective}
						</Badge>

						{/* Joined {formatDate(userProfile?.user?.createdAt)} */}
					</FlexLayout>
				</FlexLayout>
			}
			actions={<UserCardHeaderActions {...userProfile} />}
			size="md"
		/>
		<UserProfileAttributes {...userProfile} />
	</LinkCard>
);

const UserCardHeaderActions = memo(
	(
		actions: Pick<
			TUserSearchFragment,
			'customPronouns' | 'pronouns' | 'objective'
		>
	) => (
		<React.Fragment>
			<PronounsLabel
				pronouns={actions.pronouns}
				customPronouns={actions.customPronouns}
			/>
			{/* <PointSeparator small /> */}
			{/* <Tag
				colorScheme="fpPrimary"
				variant="solid"
				fontSize="xs"
				size="sm"
			>
				{actions.objective}
			</Tag> */}
		</React.Fragment>
	)
);

export default UserCard;