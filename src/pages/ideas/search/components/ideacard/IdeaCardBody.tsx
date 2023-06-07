import { Tag, TagLeftIcon } from '@chakra-ui/react';
import { Label } from '@/components/labels';
import { FlexLayout, StackLayout } from '@/components/layouts';
import { TIdeaPreviewFieldsFragment } from '@/generated/api';
import InterestedTotal from '@/pages/ideas/idea/components/InterestedTotal';
import React from 'react';
import { percentageBoosted } from '@/utils/validators';
import { AiTwotoneThunderbolt } from 'react-icons/ai';

type TIdeaCardBody = Pick<
	TIdeaPreviewFieldsFragment,
	| 'field'
	| 'user'
	| 'status'
	| 'summary'
	| 'interested_aggregate'
	| 'boosted_idea'
>;

const IdeaCardBody = (idea: TIdeaCardBody) => {
	return (
		<React.Fragment>
			<Label
				my={6}
				display="flex"
				color="fpGrey.500"
				overflow="hidden"
				whiteSpace="normal"
				fontSize="xs"
				css={{ whiteSpace: 'normal' }}
				wordBreak="break-word"
				noOfLines={2}
				// isTruncated
			>
				{/* {preview?.length && preview?.length <= 25
					? preview
					: `${preview}...`} */}
				{idea?.summary}
			</Label>
			<IdeaCardBodyBadges {...idea} />
		</React.Fragment>
	);
};

export const IdeaCardBodyBadges = (idea: TIdeaCardBody) => {
	const { field, status, interested_aggregate, boosted_idea } = idea;
	const isBoosted = !!boosted_idea?.ideaId;

	const totalInterested = interested_aggregate.aggregate?.count;

	return (
		<FlexLayout
			direction="row"
			flex={1}
			alignItems="center"
			justifyContent="space-between"
			w="full"
		>
			<StackLayout spacing={2} direction="row">
				<Tag
					fontSize="11px"
					size="sm"
					bg="transparent"
					borderWidth={1}
					px={3}
					py={1}
					color="fpGrey.700"
				>
					{status}
				</Tag>
				<Tag
					fontSize="11px"
					size="sm"
					bg="transparent"
					borderWidth={1}
					px={3}
					py={1}
					color="fpGrey.700"
				>
					{field}
				</Tag>
				{/* {isBoosted && (
					<Tag
						fontSize="11px"
						size="sm"
						px={3}
						py={1}
						bg="purple.500"
						color="white"
					>
						<TagLeftIcon as={AiTwotoneThunderbolt} mr={1} />
						{percentageBoosted(
							boosted_idea?.remainingCurrencyAmount
						)}
						% boosted
					</Tag>
				)} */}
			</StackLayout>
			{/* <Tag
				h="fit-content"
				ml="auto"
				fontSize={{ base: 'xx-small', sm: 'x-small' }}
				colorScheme="fpPrimary"
				variant="outline"
				px={3}
				py={1}
			>
				Your idea
			</Tag> */}
			{/* </StackLayout> */}
			{totalInterested ? (
				<InterestedTotal total={totalInterested} />
			) : null}
		</FlexLayout>
	);
};

export default IdeaCardBody;
