import Icon from '@chakra-ui/icon';
import { Label } from 'components/labels';
import { FlexLayout, StackLayout } from 'components/layouts';
import { Upvote } from 'components/shared';
import { TIdea_Preview } from 'generated/api';
import React, { memo } from 'react';
import { IoChatboxOutline } from 'react-icons/io5';
import IdeaMenu from '../IdeaMenu';

const IdeaCardFooter = (idea: TIdea_Preview): JSX.Element => {
	// const onAction = (e) => {
	// 	e.stopPropagation();
	// 	// OR
	// 	e.preventDefault();
	// };

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
			<StackLayout direction={'row'} spacing={2} alignItems={'center'}>
				<Upvote {...idea.idea_votes} ideaId={idea.id} />
				{idea.number_of_comments > 0 && (
					<FlexLayout alignItems={'center'}>
						<Icon
							as={IoChatboxOutline}
							fontSize={'lg'}
							pt={0}
							mr={1}
							color={'gray.500'}
						/>
						<Label color={'gray.500'} fontSize={'sm'}>
							{idea.number_of_comments}
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
