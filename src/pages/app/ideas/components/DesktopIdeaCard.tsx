import { Box } from '@chakra-ui/layout';
import { UserAvatar } from 'components/shared';
import { TIdea_Preview } from 'generated/api';
import React from 'react';
import IdeaCardBody from './ideacard/IdeaCardBody';
import IdeaCardFooter from './ideacard/IdeaCardFooter';
import IdeaCardHeader from './ideacard/IdeaCardHeader';

const DesktopIdeaCard = (idea: TIdea_Preview): JSX.Element => {
	const { idea_user } = idea;

	return (
		<Box
			title={'Posted idea'}
			position={'relative'}
			display={{ base: 'none', sm: 'block' }}
			_hover={{ boxShadow: 'md' }}
			borderWidth={1}
			borderColor={'gray.100'}
		>
			<UserAvatar
				position={'absolute'}
				top={'0'}
				left={'0'}
				size={'md'}
				transform={'translateX(-25%) translateY(-15%)'}
				boxShadow={'md'}
				src={idea_user?.avatar_url}
			/>
			<IdeaCardHeader {...idea} />
			<Box>
				<IdeaCardBody {...idea} />
				<IdeaCardFooter {...idea} />
			</Box>
		</Box>
	);
};

export default DesktopIdeaCard;
