import { Flex, Text } from '@chakra-ui/layout';
import { StackLayout } from 'components/layouts';
import { PointSeparator, Upvote } from 'components/shared';
import { TIdea_Preview } from 'generated/graphql';
import React, { memo } from 'react';

type TIdeaCardFooter = Pick<
	TIdea_Preview,
	'field' | 'preview' | 'id' | 'idea_user' | 'idea_votes'
>;

const IdeaCardFooter = (idea: TIdeaCardFooter): JSX.Element => {
	const { field, id, idea_user, idea_votes } = idea;

	return (
		<Flex
			alignItems={'center'}
			p={{ base: 2, sm: 3 }}
			borderWidth={1}
			borderTop={0}
			borderColor={'fpLightGrey.300'}
		>
			<StackLayout direction={'row'} spacing={1}>
				<Text
					fontSize={{ base: 'xs', sm: 'sm' }}
					color={'fpPrimary.500'}
					title={
						'The country where the created user of this idea lives'
					}
				>
					{idea_user?.country}
				</Text>
			</StackLayout>
			<PointSeparator small />
			<StackLayout direction={'row'} spacing={1}>
				<Text
					fontSize={{ base: 'xs', sm: 'sm' }}
					color={'fpPrimary.500'}
					title={'The field for this idea'}
				>
					{field}
				</Text>
			</StackLayout>
			<StackLayout
				justifyContent={'flex-end'}
				flex={1}
				direction={'row'}
				spacing={{ base: 2, sm: 4 }}
			>
				<Upvote {...idea_votes} ideaId={id} />

				{/* <Flex
					alignItems={'center'}
					cursor={'pointer'}
					_hover={{ color: 'fpGrey.900' }}
					color={'fpGrey.500'}
				>
					<Icon
						as={IoChatboxEllipsesSharp}
						fontSize={{ base: 'md', sm: 'xl' }}
						title={'Number of comments on this idea'}
						mr={{ base: 1, sm: 2 }}
					/>
					<Text
						fontSize={{ base: 'xs', sm: 'sm' }}
						fontWeight={'medium'}
					>
						5
					</Text>
				</Flex> */}
			</StackLayout>
		</Flex>
	);
};

export default memo(IdeaCardFooter);
