import { Label } from 'components/labels';
import { StackLayout } from 'components/layouts';
import BaseTag from 'components/tags/BaseTag';
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
				fontSize={'smaller'}
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

export const IdeaCardBodyBadges = (idea: TIdeaCardBody) => {
	const { field, status } = idea;

	return (
		<StackLayout
			direction={'row'}
			spacing={2}
			flex={1}
			alignItems={'center'}
		>
			<BaseTag color={'fpPrimary.500'} bg={'white'}>
				{status}
			</BaseTag>
			<BaseTag color={'fpPrimary.500'} bg={'white'}>
				{field}
			</BaseTag>
		</StackLayout>
	);
};

export default IdeaCardBody;
