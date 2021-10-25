import { Box } from '@chakra-ui/react';
import { TIdea_Preview } from 'generated/graphql';
import React from 'react';
import IdeaCardBody from './ideacard/IdeaCardBody';
import IdeaCardFooter from './ideacard/IdeaCardFooter';
import IdeaCardHeader from './ideacard/IdeaCardHeader';

const MobileIdeaCard = (idea: TIdea_Preview): JSX.Element => {
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
