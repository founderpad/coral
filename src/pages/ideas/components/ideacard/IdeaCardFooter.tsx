import Icon from '@chakra-ui/icon';
import { Label } from 'components/labels';
import { FlexLayout, StackLayout } from 'components/layouts';
import { TIdea_Preview } from 'generated/api';
import IdeaUpvote from 'pages/idea/components/IdeaUpvote';
import React, { memo } from 'react';
import { IoChatboxSharp } from 'react-icons/io5';
import IdeaMenu from '../IdeaMenu';

const IdeaCardFooter = (idea: TIdea_Preview): JSX.Element => {
	// const onAction = (e) => {
	// 	e.stopPropagation();
	// 	// OR
	// 	e.preventDefault();
	// };

	const { id, idea_votes, totalComments } = idea;

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
			<StackLayout direction={'row'} spacing={4} alignItems={'center'}>
				{/* <Upvote {...idea.idea_votes} ideaId={idea.id} /> */}
				<IdeaUpvote {...idea} />
				{totalComments > 0 && (
					<FlexLayout alignItems={'center'}>
						<Icon
							as={IoChatboxSharp}
							fontSize={'lg'}
							pt={0}
							mr={1}
							color={'gray.400'}
						/>
						<Label color={'gray.400'} fontSize={'sm'}>
							{totalComments}
						</Label>
					</FlexLayout>
				)}
			</StackLayout>
			<IdeaMenu {...idea} />
			{/* <IconButton
				aria-label={'report-button'}
				variant={'unstyled'}
				color={'gray.400'}
				onClick={onAction}
			>
				<Icon as={IoFlagSharp} />
			</IconButton> */}
			{/* {idea_user?.country && (
				<BaseTag color={'fpPrimary.500'} bg={'white'}>
					{idea_user?.country}
				</BaseTag>
			)}
			<BaseTag color={'fpPrimary.500'} bg={'white'}>
				{field}
			</BaseTag> */}
		</StackLayout>
		// </Flex>
	);
};

export default memo(IdeaCardFooter);
