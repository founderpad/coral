import { Idea_Preview } from 'generated/graphql';
import React from 'react';
import DesktopIdeaCard from '../DesktopIdeaCard';
import MobileIdeaCard from '../MobileIdeaCard';

const IdeaCard = (idea: Idea_Preview): JSX.Element => {
	return (
		<React.Fragment>
			<DesktopIdeaCard {...idea} />
			<MobileIdeaCard {...idea} />
		</React.Fragment>
	);
};

export default IdeaCard;
