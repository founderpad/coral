import { Icon, Tag } from '@chakra-ui/react';
import { BoxLayout, FlexLayout } from '@components/layouts';
import { BaseLink } from '@components/links';
import { PointSeparator, UserAvatarDetails } from '@components/shared';
import { formatDate } from '@utils/validators';
import React from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { TFounderUsers } from 'src/types/founders';

const founderAttrs = (founderProfileAttrs: TFounderUsers): string[] => {
	const attrs = [];

	if (founderProfileAttrs.availability)
		attrs.push(
			`Can commit ${founderProfileAttrs.availability} hours per week`
		);

	if (founderProfileAttrs.specialistIndustry)
		attrs.push(`Specialises in ${founderProfileAttrs.specialistIndustry} `);

	if (founderProfileAttrs.status)
		attrs.push(`${founderProfileAttrs.status} in a startup`);

	if (founderProfileAttrs.startups)
		attrs.push(`Worked with ${founderProfileAttrs.startups}`);

	if (founderProfileAttrs.skills)
		attrs.push(`Has ${founderProfileAttrs.skills.length} skills`);

	// for (const attr in Object.entries(founderProfileAttrs)) {
	// 	attrs.push(attr);
	// }

	// if (founderProfileAttrs.status) attrs.
	return attrs as string[];
};

const FounderProfileAttributes = (founderProfileAttrs: TFounderUsers) => {
	if (!founderAttrs(founderProfileAttrs).length) return null;

	return (
		<FlexLayout
			flexWrap={'wrap'}
			direction={'row'}
			alignItems={'center'}
			my={6}
		>
			{founderAttrs(founderProfileAttrs).map((attr) => (
				<Tag fontSize={'xs'} mr={1} mb={1} key={attr}>
					{attr}
				</Tag>
			))}
		</FlexLayout>
	);
};

const FounderCard = (founderProfile: TFounderUsers) => {
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
			py={4}
			flex={1}
			rounded={'md'}
			position={'relative'}
			css={{
				'> .cardHover:hover': {
					background: 'rgba(255, 255, 255, 0.5)',
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
				title={founderProfile?.user?.displayName}
				subtitle={
					<FlexLayout alignItems={'center'}>
						<Icon as={IoLocationOutline} mr={1} />
						{founderProfile?.user?.address?.country}
						<PointSeparator small />
						Joined {formatDate(founderProfile?.user?.createdAt)}
					</FlexLayout>
				}
				size={'md'}
			/>

			<FounderProfileAttributes {...founderProfile} />
		</FlexLayout>
	);
};

export default FounderCard;
