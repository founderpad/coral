import Icon from '@chakra-ui/icon';
import { Label } from 'components/labels';
import { FlexLayout, StackLayout } from 'components/layouts';
import { TIdea_Preview } from 'generated/api';
import IdeaUpvote from 'pages/idea/components/IdeaUpvote';
import React, { memo } from 'react';
import { IoChatboxSharp } from 'react-icons/io5';
import IdeaMenu from '../IdeaMenu';

const IdeaCardFooter = (idea: TIdea_Preview): JSX.Element => (
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
		<StackLayout direction={'row'} spacing={4} alignItems={'center'}>
			<IdeaUpvote {...idea} />
			{idea?.totalComments > 0 && (
				<FlexLayout alignItems={'center'}>
					<Icon
						as={IoChatboxSharp}
						fontSize={'sm'}
						pt={0}
						mr={1}
						color={'gray.400'}
					/>
					<Label color={'gray.400'} fontSize={'xs'}>
						{idea.totalComments}
					</Label>
				</FlexLayout>
			)}
		</StackLayout>
		<IdeaMenu {...idea} />
	</StackLayout>
);

export default memo(IdeaCardFooter);
