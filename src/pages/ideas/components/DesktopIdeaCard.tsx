import { Box } from '@chakra-ui/layout';
import { UserAvatar } from 'components/shared';
import { Idea_Preview } from 'generated/graphql';
import React from 'react';
import IdeaCardBody from './ideacard/IdeaCardBody';
import IdeaCardFooter from './ideacard/IdeaCardFooter';
import IdeaCardHeader from './ideacard/IdeaCardHeader';

const DesktopIdeaCard = (idea: Idea_Preview): JSX.Element => {
	const { idea_user } = idea;

	return (
		<Box
			title={'Posted idea'}
			position={'relative'}
			display={{ base: 'none', sm: 'block' }}
			_hover={{ boxShadow: 'md' }}
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
			<Box hover={{ bg: 'fpGrey.900' }}>
				<IdeaCardBody {...idea} />
				<IdeaCardFooter {...idea} />
			</Box>
		</Box>
	);
};

export default DesktopIdeaCard;
