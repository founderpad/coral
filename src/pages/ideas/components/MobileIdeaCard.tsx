import { Box } from '@chakra-ui/react';
import { Idea_Preview } from 'generated/graphql';
import React from 'react';
import IdeaCardBody from './ideacard/IdeaCardBody';
import IdeaCardFooter from './ideacard/IdeaCardFooter';
import IdeaCardHeader from './ideacard/IdeaCardHeader';

const MobileIdeaCard = (idea: Idea_Preview): JSX.Element => {
	return (
		<Box
			position={'relative'}
			display={{ base: 'block', sm: 'none' }}
			flexDirection={'column'}
		>
			<IdeaCardHeader {...idea} />
			<IdeaCardBody {...idea} />
			<IdeaCardFooter {...idea} />
		</Box>
	);
};

export default MobileIdeaCard;
