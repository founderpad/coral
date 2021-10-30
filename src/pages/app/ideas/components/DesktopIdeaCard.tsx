import { Box } from '@chakra-ui/layout';
import { TIdea_Preview } from 'generated/api';
import React from 'react';
import IdeaCardBody from './ideacard/IdeaCardBody';
import IdeaCardFooter from './ideacard/IdeaCardFooter';
import IdeaCardHeader from './ideacard/IdeaCardHeader';

const DesktopIdeaCard = (idea: TIdea_Preview): JSX.Element => (
	<Box
		title={'Posted idea'}
		position={'relative'}
		display={{ base: 'none', sm: 'block' }}
		_hover={{ boxShadow: 'md', transition: 'ease-in .3s' }}
		borderRadius={'md'}
		p={3}
		flex={1}
	>
		<IdeaCardHeader {...idea} />
		<IdeaCardBody {...idea} />
		<IdeaCardFooter {...idea} />
	</Box>
);

export default DesktopIdeaCard;
