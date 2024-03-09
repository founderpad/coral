import { Card } from '@/components/cards/Card';
import { TIdeaPreviewFieldsFragment } from '@/generated/api';
import React from 'react';
import { IdeaCardHeader, IdeaCardBody, IdeaCardFooter } from '.';

const IdeaCard = (idea: TIdeaPreviewFieldsFragment) => {
	return (
		<Card
			header={<IdeaCardHeader {...idea} />}
			content={<IdeaCardBody {...idea} />}
			footer={<IdeaCardFooter {...idea} />}
			href={`/idea/${idea.id}`}
		/>
	);
};

export default IdeaCard;
