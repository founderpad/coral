import { Card } from '@/components/cards/Card';
import { TIdeaPreviewFieldsFragment } from '@/generated/api';
import React from 'react';
import IdeaCardBody from './IdeaCardBody';
import IdeaCardFooter from './IdeaCardFooter';
import IdeaCardHeader from './IdeaCardHeader';

const IdeaCard = (idea: TIdeaPreviewFieldsFragment) => (
	// <LinkCard href={`/idea/${idea.id}`} footer={<IdeaCardFooter {...idea} />}>
	// 	<IdeaCardHeader {...idea} />
	// 	<IdeaCardBody {...idea} />
	// </LinkCard>

	<Card
		header={<IdeaCardHeader {...idea} />}
		content={<IdeaCardBody {...idea} />}
		footer={<IdeaCardFooter {...idea} />}
		href={`/idea/${idea.id}`}
	/>
);

export default IdeaCard;
