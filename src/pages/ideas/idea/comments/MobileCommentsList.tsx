import PostComment from '@/components/shared/PostComment';
import { useModalDrawer } from '@/hooks/util';
import { Button, Icon } from '@chakra-ui/react';
import { IoChatboxOutline } from 'react-icons/io5';
import { useIdeaFragment } from '../query/ideaQuery';
import MobileComments from './MobileComments';

export const MobileCommentsList = () => {
	const { openModalDrawer } = useModalDrawer();
	const { totalComments = 0 } = useIdeaFragment();

	const onShowCommentsMobile = () => {
		openModalDrawer({
			title: `${totalComments} Comments`,
			showCancel: false,
			action: <PostComment />,
			body: <MobileComments />,
			size: '2xl'
		});
	};

	return (
		<Button
			name="view-comments-mobile"
			size="sm"
			variant="unstyled"
			onClick={onShowCommentsMobile}
			leftIcon={<Icon as={IoChatboxOutline} fontSize="lg" />}
			_selected={{ background: 'transparent' }}
			display="flex"
			alignItems="center"
			color="fpGrey.300"
		>
			{totalComments}
		</Button>
	);
};

export default MobileCommentsList;
