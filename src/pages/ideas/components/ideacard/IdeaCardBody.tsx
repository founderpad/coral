import { Label } from 'components/labels';
import { StackLayout } from 'components/layouts';
import { PointSeparator } from 'components/shared';
import { TIdea_Preview } from 'generated/api';
import React from 'react';

type TIdeaCardBody = Pick<
	TIdea_Preview,
	'preview' | 'field' | 'idea_user' | 'status'
>;

const IdeaCardBody = (idea: TIdeaCardBody): JSX.Element => {
	const { preview } = idea;

	return (
		<React.Fragment>
			<Label
				my={4}
				d={'flex'}
				color={'gray.500'}
				overflow={'hidden'}
				whiteSpace={'normal'}
				fontSize={'xs'}
				css={{ whiteSpace: 'normal' }}
				noOfLines={2}
				isTruncated
			>
				{preview}
			</Label>
			<IdeaCardBodyBadges {...idea} />
		</React.Fragment>
	);
};

export const IdeaCardBodyBadges = (idea: TIdeaCardBody): JSX.Element => {
	const { field, status } = idea;

	return (
		<StackLayout
			direction={'row'}
			flex={1}
			alignItems={'center'}
			justifyContent={'flex-end'}
			spacing={1}
			full
		>
			{/* <BaseTag color={'fpPrimary.500'} bg={'white'}>
				{status}
			</BaseTag>
			<BaseTag color={'fpPrimary.500'} bg={'white'}>
				{field}
			</BaseTag> */}
			<Label color={'fpPrimary.500'} fontSize={'xs'}>
				{status}
			</Label>
			<PointSeparator small />
			<Label color={'fpPrimary.500'} fontSize={'xs'}>
				{field}
			</Label>
		</StackLayout>
	);
};

export default IdeaCardBody;
