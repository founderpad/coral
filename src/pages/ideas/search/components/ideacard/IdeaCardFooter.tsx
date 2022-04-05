import Icon from '@chakra-ui/icon';
import { Button } from '@chakra-ui/react';
import { IoChatbubbleOutline } from '@components/icons';
import { StackLayout } from '@components/layouts';
import { TIdeaPreviewFieldsFragment } from '@generated/api';
import IdeaUpvote from '@pages/ideas/idea/components/IdeaUpvote';
import React, { memo } from 'react';
import IdeaMenu from '../IdeaMenu';

const IdeaCardFooter = (idea: TIdeaPreviewFieldsFragment) => (
	<StackLayout
		direction="row"
		spacing={0}
		rounded="none"
		w="full"
		px={{ base: 0, sm: 4 }}
		justifyContent="space-between"
		alignItems="center"
	>
		<StackLayout direction="row" spacing={4} alignItems="center">
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
				d="flex"
				alignItems="center"
			>
				{idea?.comments_aggregate?.aggregate?.count}
			</Button>
		</StackLayout>
		<IdeaMenu {...idea} />
	</StackLayout>
);

export default memo(IdeaCardFooter);
