import { FlexLayout } from 'components/layouts';
import { BaseLink } from 'components/links';
import { Upvote } from 'components/shared';
import { TIdea_Preview } from 'generated/api';
import React from 'react';
import IdeaMenu from '../IdeaMenu';
import IdeaCardBody from './IdeaCardBody';
import IdeaCardHeader from './IdeaCardHeader';

const IdeaCard = (idea: TIdea_Preview): JSX.Element => (
	<FlexLayout flex={1}>
		<Upvote {...idea.idea_votes} ideaId={idea.id} />
		<FlexLayout
			flexDirection={'column'}
			as={BaseLink}
			href={`/idea/${idea.id}`}
			alignItems={'flex-start'}
			_hover={{
				borderColor: 'gray.50',
				transition: 'ease-in .3s',
				bg: 'gray.50'
			}}
			p={2}
			flex={1}
		>
			<IdeaCardHeader {...idea} />
			<IdeaCardBody {...idea} />
		</FlexLayout>
		<IdeaMenu {...idea} />
	</FlexLayout>
);

export default IdeaCard;
