import { Stack } from '@chakra-ui/layout';
import { BaseLink } from 'components/links';
import { TIdea_Preview } from 'generated/api';
import React from 'react';
import IdeaCardBody from './ideacard/IdeaCardBody';
import IdeaCardFooter from './ideacard/IdeaCardFooter';
import IdeaCardHeader from './ideacard/IdeaCardHeader';

const DesktopIdeaCard = (idea: TIdea_Preview): JSX.Element => (
	<Stack
		title={'Posted idea'}
		position={'relative'}
		display={{ base: 'none', sm: 'block' }}
		borderWidth={1}
		borderColor={'white'}
		_hover={{
			boxShadow: 'sm',
			bg: '#fbfcfd',
			// opacity: '0.7',
			borderColor: 'gray.100',
			transition: 'ease-in .3s'
		}}
		borderRadius={'md'}
		p={2}
		flex={1}
		spacing={4}
		as={BaseLink}
		href={`/app/idea/${idea.id}`}
	>
		<IdeaCardHeader {...idea} />
		<IdeaCardBody {...idea} />
		<IdeaCardFooter {...idea} />
	</Stack>
);

export default DesktopIdeaCard;
