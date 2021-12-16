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
			<BaseTag color={'fpPrimary.500'} bg={'white'} fontSize={'x-small'}>
				{status}
			</BaseTag>
			<BaseTag color={'fpPrimary.500'} bg={'white'} fontSize={'x-small'}>
				{field}
			</BaseTag>
		</StackLayout>
	);
};

export default IdeaCardBody;
