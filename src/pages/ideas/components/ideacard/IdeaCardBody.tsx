import { Label } from '@components/labels';
import { FlexLayout, StackLayout } from '@components/layouts';
import { PointSeparator } from '@components/shared';
import { TIdeaPreviewFieldsFragment } from '@generated/api';
import InterestedTotal from '@pages/idea/components/InterestedTotal';
import React from 'react';

type TIdeaCardBody = Pick<
	TIdeaPreviewFieldsFragment,
	'preview' | 'field' | 'user' | 'status' | 'interested_aggregate'
>;

const IdeaCardBody = (idea: TIdeaCardBody) => {
	const { preview } = idea;

	return (
		<React.Fragment>
			<Label
				my={6}
				d={'flex'}
				color={'gray.500'}
				overflow={'hidden'}
				whiteSpace={'normal'}
				fontSize={'sm'}
				css={{ whiteSpace: 'normal' }}
				noOfLines={2}
				isTruncated
			>
				{preview?.length && preview?.length <= 25
					? preview
					: `${preview}...`}
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
			direction={'row'}
			flex={1}
			alignItems={'center'}
			justifyContent={'space-between'}
			w={'full'}
		>
			<StackLayout spacing={0} direction={'row'} alignItems={'center'}>
				<Label color={'fpPrimary.400'} fontSize={'small'}>
					{status}
				</Label>
				<PointSeparator small />
				<Label color={'fpPrimary.500'} fontSize={'small'}>
					{field}
				</Label>
			</StackLayout>
			{totalInterested ? (
				<InterestedTotal total={totalInterested} />
			) : null}
		</FlexLayout>
	);
};

export default IdeaCardBody;
