import { Tag } from '@chakra-ui/react';
import LinkCard from '@components/cards/LinkCard';
import { FlexLayout } from '@components/layouts';
import { PointSeparator, UserAvatarDetails } from '@components/shared';
import PronounsLabel from '@components/shared/PronounsLabel';
import { TUserSearchFragment } from '@generated/api';
import { formatDate } from '@utils/validators';
import React, { memo } from 'react';

const founderAttrs = (
	founderProfileAttrs: TUserSearchFragment
): Array<string> => {
	const attrs = [];

	if (founderProfileAttrs['availability'])
		attrs.push(
			`Can commit ${founderProfileAttrs['availability']} hours per week`
		);

	if (founderProfileAttrs['specialistIndustry'])
		attrs.push(
			`Specialises in ${founderProfileAttrs[
				'specialistIndustry'
			].toLowerCase()} `
		);

	if (founderProfileAttrs['status'])
		attrs.push(`${founderProfileAttrs['status']} in a startup`);

	if (founderProfileAttrs['startups'])
		attrs.push(`Worked with ${founderProfileAttrs['startups']}`);

	if (founderProfileAttrs['skills'])
		attrs.push(`Has ${founderProfileAttrs['skills'].length} skill(s)`);

	return attrs as string[];
};

const FounderProfileAttributes = (founderProfileAttrs: TUserSearchFragment) => {
	if (!founderAttrs(founderProfileAttrs).length) return null;

	return (
		<FlexLayout
			flexWrap={'wrap'}
			direction={'row'}
			alignItems={'center'}
			pt={4}
		>
			{founderAttrs(founderProfileAttrs).map((attr) => (
				<Tag fontSize={'xs'} size={'sm'} mr={1} mb={1} key={attr}>
					{attr}
				</Tag>
			))}
		</FlexLayout>
	);
};

const FounderCard = (founderProfile: TUserSearchFragment) => (
	<LinkCard href={`/user/${founderProfile?.user?.id}`}>
		<UserAvatarDetails
			src={founderProfile?.user?.avatarUrl || undefined}
			title={founderProfile?.user?.displayName}
			subtitle={
				<FlexLayout alignItems={'center'} flexDirection={'column'}>
					<FlexLayout>
						{founderProfile?.user?.address?.country}
						<PointSeparator small />
						Joined {formatDate(founderProfile?.user?.createdAt)}
					</FlexLayout>
				</FlexLayout>
			}
			actions={<FounderCardHeaderActions {...founderProfile} />}
			size={'md'}
		/>
		<FounderProfileAttributes {...founderProfile} />
	</LinkCard>
);

const FounderCardHeaderActions = memo(
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
			<PointSeparator small />
			<Tag
				colorScheme={'fpPrimary'}
				variant={'solid'}
				fontSize={'xs'}
				size={'sm'}
			>
				{actions.objective}
			</Tag>
		</React.Fragment>
	)
);

export default FounderCard;
