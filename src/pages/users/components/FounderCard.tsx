import { Tag } from '@chakra-ui/react';
import { Label } from '@components/labels';
import { BoxLayout, FlexLayout } from '@components/layouts';
import { BaseLink } from '@components/links';
import { PointSeparator, UserAvatarDetails } from '@components/shared';
import { TUserSearchFragment } from '@generated/api';
import { formatDate } from '@utils/validators';
import React from 'react';

const founderAttrs = (founderProfileAttrs: TUserSearchFragment): string[] => {
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

const FounderCard = (founderProfile: TUserSearchFragment) => {
	return (
		<FlexLayout
			flexDirection={'column'}
			as={BaseLink}
			href={`/user/${founderProfile?.user?.id}`}
			alignItems={'flex-start'}
			_hover={{
				borderColor: 'gray.50',
				transition: 'ease-in .3s',
				transform: 'scale(1.0125)'
			}}
			pt={4}
			flex={1}
			rounded={'md'}
			position={'relative'}
			css={{
				'> .cardHover:hover': {
					background: 'rgba(255, 255, 255, 0.3)',
					transition: 'ease-in .3s'
				}
			}}
		>
			<BoxLayout
				as={'span'}
				className={'cardHover'}
				position={'absolute'}
				w={'full'}
				h={'full'}
				top={0}
				left={0}
				zIndex={999}
			/>
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
				actions={
					<>
						{founderProfile?.pronouns && (
							<Label fontSize={'xs'} color={'fpGrey.500'}>
								(
								{founderProfile?.customPronouns
									? founderProfile?.customPronouns
									: founderProfile?.pronouns}
								)
							</Label>
						)}
						<PointSeparator small />
						<Tag
							colorScheme={'fpPrimary'}
							variant={'solid'}
							fontSize={'xs'}
							size={'sm'}
						>
							{founderProfile.objective}
						</Tag>
					</>
				}
				size={'md'}
			/>

			<FounderProfileAttributes {...founderProfile} />
		</FlexLayout>
	);
};

export default FounderCard;
