import { Tag } from '@chakra-ui/react';
import { Label } from '@components/labels';
import { FlexLayout, StackLayout } from '@components/layouts';
import { TIdeaPreviewFieldsFragment } from '@generated/api';
import InterestedTotal from '@pages/ideas/idea/components/InterestedTotal';
import React from 'react';

type TIdeaCardBody = Pick<
	TIdeaPreviewFieldsFragment,
	'field' | 'user' | 'status' | 'summary' | 'interested_aggregate'
>;

const IdeaCardBody = (idea: TIdeaCardBody) => {
	const { summary } = idea;

	return (
		<React.Fragment>
			<Label
				my={6}
				d="flex"
				color="fpGrey.500"
				overflow="hidden"
				whiteSpace="normal"
				fontSize="xs"
				css={{ whiteSpace: 'normal' }}
				wordBreak="break-all"
				noOfLines={2}
				isTruncated
			>
				{/* {preview?.length && preview?.length <= 25
					? preview
					: `${preview}...`} */}
				{summary}
			</Label>
			<IdeaCardBodyBadges {...idea} />
		</React.Fragment>
	);
};

export const IdeaCardBodyBadges = (idea: TIdeaCardBody) => {
	const { field, status, interested_aggregate } = idea;

	const totalInterested = interested_aggregate.aggregate?.count;

	return (
		<FlexLayout
			direction="row"
			flex={1}
			alignItems="center"
			justifyContent="space-between"
			w="full"
		>
			<StackLayout spacing={1} direction="row">
				<Tag fontSize="xs" size="sm">
					{status}
				</Tag>
				<Tag fontSize="xs" size="sm">
					{field}
				</Tag>
			</StackLayout>
			{totalInterested ? (
				<InterestedTotal total={totalInterested} />
			) : null}
		</FlexLayout>
	);
};

export default IdeaCardBody;
