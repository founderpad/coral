import { StackLayout } from 'components/layouts';
import { TIdea_Preview } from 'generated/api';
import React from 'react';
import IdeaCardBody from './ideacard/IdeaCardBody';
import IdeaCardFooter from './ideacard/IdeaCardFooter';
import IdeaCardHeader from './ideacard/IdeaCardHeader';

const MobileIdeaCard = (idea: TIdea_Preview): JSX.Element => (
	<StackLayout
		title={'Posted idea'}
		position={'relative'}
		display={{ base: 'block', sm: 'none' }}
		spacing={3}
	>
		<IdeaCardHeader {...idea} />
		<IdeaCardBody {...idea} />
		<IdeaCardFooter {...idea} />
	</StackLayout>
);

export default MobileIdeaCard;
