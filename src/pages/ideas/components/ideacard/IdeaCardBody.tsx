import { Label } from '@components/labels';
import { FlexLayout, StackLayout } from '@components/layouts';
import { PointSeparator } from '@components/shared';
import { TIdeaPreviewFieldsFragment } from '@generated/api';
import InterestedTotal from '@pages/idea/components/InterestedTotal';
import React from 'react';

type TIdeaCardBody = Pick<
	TIdeaPreviewFieldsFragment,
	'preview' | 'field' | 'user' | 'status' | 'total_interested'
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
				fontSize={'xs'}
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
	const { field, status, total_interested } = idea;

	return (
		<FlexLayout
			direction={'row'}
			flex={1}
			alignItems={'center'}
			justifyContent={'space-between'}
			w={'full'}
		>
			<StackLayout spacing={0} direction={'row'} alignItems={'center'}>
				<Label color={'fpPrimary.400'} fontSize={'xs'}>
					{status}
				</Label>
				<PointSeparator small />
				<Label color={'fpPrimary.500'} fontSize={'xs'}>
					{field}
				</Label>
			</StackLayout>
			{total_interested ? (
				<InterestedTotal total={total_interested} />
			) : null}
		</FlexLayout>
	);
};

export default IdeaCardBody;
