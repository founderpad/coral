import { TIdea_Preview } from 'generated/api';
import React from 'react';
import DesktopIdeaCard from '../DesktopIdeaCard';
import MobileIdeaCard from '../MobileIdeaCard';

const IdeaCard = (idea: TIdea_Preview): JSX.Element => (
	<React.Fragment>
		<DesktopIdeaCard {...idea} />
		<MobileIdeaCard {...idea} />
	</React.Fragment>
);

export default IdeaCard;
