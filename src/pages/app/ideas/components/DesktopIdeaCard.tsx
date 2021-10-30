import { Box } from '@chakra-ui/layout';
import { TIdea_Preview } from 'generated/api';
import React from 'react';
import IdeaCardBody from './ideacard/IdeaCardBody';
import IdeaCardFooter from './ideacard/IdeaCardFooter';
import IdeaCardHeader from './ideacard/IdeaCardHeader';

const DesktopIdeaCard = (idea: TIdea_Preview): JSX.Element => {
	// const { idea_user } = idea;

	return (
		<Box
			title={'Posted idea'}
			position={'relative'}
			display={{ base: 'none', sm: 'block' }}
			_hover={{ boxShadow: 'md', transition: 'ease-in .3s' }}
			// borderWidth={1}
			// borderColor={'gray.200'}
			borderRadius={'md'}
			p={3}
			flex={1}
		>
			{/* <UserAvatar
				position={'absolute'}
				top={'0'}
				left={'0'}
				size={'md'}
				transform={'translateX(-25%) translateY(-25%)'}
				boxShadow={'lg'}
				src={idea_user?.avatar_url}
				borderWidth={3}
				showBorder
			/> */}
			<IdeaCardHeader {...idea} />
			<IdeaCardBody {...idea} />
			<IdeaCardFooter {...idea} />
		</Box>
	);
};

export default DesktopIdeaCard;
