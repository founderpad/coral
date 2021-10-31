import { Flex } from '@chakra-ui/layout';
import { StackLayout } from 'components/layouts';
import BaseTag from 'components/tags/BaseTag';
import { TIdea_Preview } from 'generated/api';
import React, { memo } from 'react';

type TIdeaCardFooter = Pick<
	TIdea_Preview,
	'field' | 'preview' | 'id' | 'idea_user' | 'idea_votes'
>;

const IdeaCardFooter = (idea: TIdeaCardFooter): JSX.Element => {
	const { field, id, idea_user, idea_votes } = idea;
	return (
		<Flex alignItems={'center'} borderTop={0}>
			<StackLayout direction={'row'} spacing={2}>
				<BaseTag color={'fpPrimary.500'} bg={'white'}>
					{idea_user?.country}
				</BaseTag>
				<BaseTag color={'fpPrimary.500'} bg={'white'}>
					{field}
				</BaseTag>
			</StackLayout>
			{/* <StackLayout
				justifyContent={'flex-end'}
				flex={1}
				direction={'row'}
				spacing={{ base: 2, sm: 4 }}
			>
				<Upvote {...idea_votes} ideaId={id} />
			</StackLayout> */}
		</Flex>
	);
};

export default memo(IdeaCardFooter);
