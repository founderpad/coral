import Icon from '@chakra-ui/icon';
import { IoChatbubbleSharp } from '@components/icons';
import { Label } from '@components/labels';
import { FlexLayout, StackLayout } from '@components/layouts';
import { TIdeaPreviewFieldsFragment } from '@generated/api';
import IdeaUpvote from '@pages/idea/components/IdeaUpvote';
import React, { memo } from 'react';
import IdeaMenu from '../IdeaMenu';

const IdeaCardFooter = (idea: TIdeaPreviewFieldsFragment) => {
	const totalComments = idea?.total_comments ?? 0;
	return (
		<StackLayout
			direction={'row'}
			spacing={0}
			rounded={'none'}
			mb={2}
			w={'full'}
			justifyContent={'space-between'}
			alignItems={'center'}
			borderTopWidth={1}
			borderTopColor={'gray.100'}
		>
			<StackLayout direction={'row'} spacing={3} alignItems={'center'}>
				<IdeaUpvote {...idea} />

				{totalComments > 0 && (
					<FlexLayout alignItems={'center'}>
						<Icon
							as={IoChatbubbleSharp}
							fontSize={'sm'}
							pt={0}
							mr={1}
							color={'gray.400'}
						/>
						<Label color={'gray.400'} fontSize={'xs'}>
							{idea?.comments_aggregate?.aggregate?.count}
						</Label>
					</FlexLayout>
				)}
			</StackLayout>
			<IdeaMenu {...idea} />
		</StackLayout>
	);
};

export default memo(IdeaCardFooter);
