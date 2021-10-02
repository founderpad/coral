import { Box } from '@chakra-ui/layout';
import UserAvatar from 'components/shared/UserAvatar';
import { Idea_Preview } from 'generated/graphql';
import { useCurrentUser } from 'hooks/auth';
import React from 'react';
import IdeaCardBody from './ideacard/IdeaCardBody';
import IdeaCardFooter from './ideacard/IdeaCardFooter';
import IdeaCardHeader from './ideacard/IdeaCardHeader';

const DesktopIdeaCard = (idea: Idea_Preview): JSX.Element => {
	// const avatarSize = useBreakpointValue({ : 'md' });
	const avatarUser = useCurrentUser().avatar_url;

	return (
		<Box position={'relative'} display={{ base: 'none', sm: 'block' }}>
			<UserAvatar
				position={'absolute'}
				top={'0'}
				left={'0'}
				size={'md'}
				transform={'translateX(-25%) translateY(-15%)'}
				boxShadow={'md'}
				src={avatarUser}
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
