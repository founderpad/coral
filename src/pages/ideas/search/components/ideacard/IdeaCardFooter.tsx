import Icon from '@chakra-ui/icon';
import { Button } from '@chakra-ui/react';
import { IoChatbubbleOutline } from '@/components/icons';
import { StackLayout } from '@/components/layouts';
import { TIdeaPreviewFieldsFragment } from '@/generated/api';
import { useAuth } from '@/hooks/auth';
import BoostIdea from '@/pages/ideas/idea/components/BoostIdea';
import IdeaUpvote from '@/pages/ideas/idea/components/IdeaUpvote';
import React, { memo } from 'react';
import IdeaMenu from '../IdeaMenu';

const IdeaCardFooter = (idea: TIdeaPreviewFieldsFragment) => {
	const user = useAuth().getUser();

	return (
		<StackLayout
			direction="row"
			spacing={0}
			rounded="none"
			w="full"
			px={{ base: 0, sm: 4 }}
			justifyContent="space-between"
			alignItems="center"
		>
			<StackLayout direction="row" alignItems="center">
				<IdeaUpvote {...idea} />
				<Button
					as="div"
					name="comments-number-button"
					pl={0}
					size="sm"
					variant="unstyled"
					leftIcon={<Icon as={IoChatbubbleOutline} fontSize="lg" />}
					_selected={{ background: 'transparent' }}
					color="fpGrey.300"
					display="flex"
					alignItems="center"
					aria-label="comments-number-button"
				>
					{idea?.comments_aggregate?.aggregate?.count}
				</Button>
			</StackLayout>
			{user?.id === idea.userId && <BoostIdea {...idea} />}

			<IdeaMenu {...idea} />
		</StackLayout>
	);
};

export default memo(IdeaCardFooter);
