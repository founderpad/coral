import LinkCard from '@components/cards/LinkCard';
import { TIdeaPreviewFieldsFragment } from '@generated/api';
import React from 'react';
import IdeaCardBody from './IdeaCardBody';
import IdeaCardFooter from './IdeaCardFooter';
import IdeaCardHeader from './IdeaCardHeader';

const IdeaCard = (idea: TIdeaPreviewFieldsFragment) => (
	<LinkCard
		href={`/idea/${idea.id}`}
		footer={<IdeaCardFooter {...idea} />}
		padding={{ base: 0, lg: 4 }}
	>
		<IdeaCardHeader {...idea} />
		<IdeaCardBody {...idea} />
	</LinkCard>
);

export default IdeaCard;