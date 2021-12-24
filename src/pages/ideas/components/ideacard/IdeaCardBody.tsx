import { Label } from 'components/labels';
import { FlexLayout, StackLayout } from 'components/layouts';
import { PointSeparator } from 'components/shared';
import { TIdea_Preview } from 'generated/api';
import InterestedTotal from 'pages/idea/components/InterestedTotal';
import React from 'react';

type TIdeaCardBody = Pick<
	TIdea_Preview,
	'preview' | 'field' | 'user' | 'status' | 'totalInterest'
>;

const IdeaCardBody = (idea: TIdeaCardBody): JSX.Element => {
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
				{preview.length <= 25 ? preview : `${preview}...`}
			</Label>
			<IdeaCardBodyBadges {...idea} />
		</React.Fragment>
	);
};

export const IdeaCardBodyBadges = (idea: TIdeaCardBody): JSX.Element => {
	const { field, status, totalInterest } = idea;

	return (
		<FlexLayout
			direction={'row'}
			flex={1}
			alignItems={'center'}
			justifyContent={'space-between'}
			w={'full'}
		>
			<StackLayout spacing={0} direction={'row'} alignItems={'center'}>
				{/* <BaseTag color={'fpPrimary.500'} bg={'white'}>
					{status}
				</BaseTag>
				<BaseTag color={'fpPrimary.500'} bg={'white'}>
					{field}
				</BaseTag> */}
				<Label color={'fpPrimary.400'} fontSize={'xs'}>
					{status}
				</Label>
				<PointSeparator small />
				<Label color={'fpPrimary.500'} fontSize={'xs'}>
					{field}
				</Label>
			</StackLayout>
			<InterestedTotal total={totalInterest} />
		</FlexLayout>
	);
};

export default IdeaCardBody;
