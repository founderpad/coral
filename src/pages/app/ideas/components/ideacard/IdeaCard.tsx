import { FlexLayout } from 'components/layouts';
import { Upvote } from 'components/shared';
import { TIdea_Preview } from 'generated/api';
import React from 'react';
import DesktopIdeaCard from '../DesktopIdeaCard';
import MobileIdeaCard from '../MobileIdeaCard';

const IdeaCard = (idea: TIdea_Preview): JSX.Element => (
	<React.Fragment>
		<FlexLayout>
			<Upvote {...idea.idea_votes} ideaId={idea.id} />
			<DesktopIdeaCard {...idea} />
			<MobileIdeaCard {...idea} />
		</FlexLayout>
	</React.Fragment>
);

export default IdeaCard;
