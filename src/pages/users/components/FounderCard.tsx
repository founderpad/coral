import { GridItem, SimpleGrid } from '@chakra-ui/react';
import { StackLayout } from '@components/layouts';
import { BaseLink } from '@components/links';
import { UserAvatarDetails } from '@components/shared';
import { convertCapacityToString, formatDate } from '@utils/validators';
import React from 'react';
import { TFounderUsers } from 'src/types/founders';

const founderAttrs = (founderProfileAttrs: TFounderUsers): string[] => {
	const attrs = [];

	if (founderProfileAttrs.availability)
		attrs.push(
			`Can commit ${convertCapacityToString(
				founderProfileAttrs.availability
			)} hours per week`
		);

	if (founderProfileAttrs.specialistIndustry)
		attrs.push(`Specialises in ${founderProfileAttrs.specialistIndustry} `);

	if (founderProfileAttrs.status)
		attrs.push(`${founderProfileAttrs.status} in a startup`);

	if (founderProfileAttrs.startups)
		attrs.push(`Worked with ${founderProfileAttrs.startups} startup(s)`);

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
		<SimpleGrid columns={{ base: 2, md: 12 }} gap={{ base: 2, sm: 4 }}>
			{founderAttrs(founderProfileAttrs).map((attr, key) => (
				<GridItem
					key={key}
					colSpan={{ base: 1, sm: 3 }}
					bg={'fpPrimary.50'}
					p={2}
					textAlign={'center'}
					minH={'40px'}
					d={'flex'}
					justifyContent={'center'}
					alignItems={'center'}
				>
					{attr}
				</GridItem>
			))}
		</SimpleGrid>
	);
};

const FounderCard = (founderProfile: TFounderUsers) => (
	<StackLayout
		flex={1}
		d={'flex'}
		spacing={4}
		flexDirection={'column'}
		as={BaseLink}
		href={`/user/${founderProfile?.user?.id}`}
		alignItems={'flex-start'}
		_hover={{
			borderColor: 'gray.50',
			transition: 'ease-in .3s',
			bg: 'gray.50'
		}}
		p={2}
		rounded={'sm'}
		fontSize={'xs'}
	>
		<UserAvatarDetails
			name={founderProfile?.user?.displayName}
			createdAt={`Joined ${formatDate(founderProfile?.user?.createdAt)}`}
			size={'md'}
		/>

		<FounderProfileAttributes {...founderProfile} />
	</StackLayout>
);

export default FounderCard;
