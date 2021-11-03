import { Stack } from '@chakra-ui/layout';
import { FlexLayout } from 'components/layouts';
import { BaseLink } from 'components/links';
import { Upvote } from 'components/shared';
import { TIdea_Preview } from 'generated/api';
import React from 'react';
import IdeaMenu from '../IdeaMenu';
import IdeaCardBody from './IdeaCardBody';
import IdeaCardHeader from './IdeaCardHeader';

const IdeaCard = (idea: TIdea_Preview): JSX.Element => (
	<FlexLayout>
		<Upvote {...idea.idea_votes} ideaId={idea.id} />
		<FlexLayout flex={1}>
			<Stack
				title={'Posted idea'}
				position={'relative'}
				borderWidth={1}
				borderColor={'white'}
				rounded={'md'}
				display={'flex'}
				flex={1}
				p={2}
				spacing={4}
				w={'full'}
				as={BaseLink}
				href={`/app/idea/${idea.id}`}
				cursor={'pointer'}
				alignItems={'flex-start'}
				_hover={{
					borderColor: 'gray.50',
					transition: 'ease-in .3s',
					bg: 'gray.50'
				}}
				zIndex={1}
				css={{
					'& .menu': {
						pointerEvents: 'none'
					}
				}}
			>
				<IdeaCardHeader {...idea} />
				<IdeaCardBody {...idea} />
			</Stack>
		</FlexLayout>

		<IdeaMenu ideaId={idea.id} />
	</FlexLayout>
);

export default IdeaCard;
