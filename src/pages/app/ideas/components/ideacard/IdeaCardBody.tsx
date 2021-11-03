import { Label } from 'components/labels';
import { StackLayout } from 'components/layouts';
import BaseTag from 'components/tags/BaseTag';
import { TIdea_Preview } from 'generated/api';
import React from 'react';

type TIdeaCardBody = Pick<TIdea_Preview, 'preview' | 'field' | 'idea_user'>;

const IdeaCardBody = (idea: TIdeaCardBody): JSX.Element => {
	const { preview } = idea;

	return (
		<React.Fragment>
			<Label
				d={'flex'}
				color={'gray.500'}
				overflow={'hidden'}
				whiteSpace={'normal'}
				fontSize={{ base: 'smaller', sm: 'sm' }}
				css={{ whiteSpace: 'normal' }}
				noOfLines={[2, 3]}
				isTruncated
			>
				{preview}...
			</Label>
			<IdeaCardBodyBadges {...idea} />
		</React.Fragment>
	);
};

const IdeaCardBodyBadges = (idea: TIdeaCardBody) => {
	const { field, idea_user } = idea;

	return (
		<StackLayout direction={'row'} spacing={2}>
			{idea_user?.country && (
				<BaseTag color={'fpPrimary.500'} bg={'white'}>
					{idea_user?.country}
				</BaseTag>
			)}
			<BaseTag color={'fpPrimary.500'} bg={'white'}>
				{field}
			</BaseTag>
		</StackLayout>
	);
};

export default IdeaCardBody;
