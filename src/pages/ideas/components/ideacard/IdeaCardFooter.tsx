import { Flex, HStack, Text } from '@chakra-ui/layout';
import { PointSeparator, Upvote } from 'components/shared';
import { Idea_Preview } from 'generated/graphql';
import React, { memo } from 'react';

type TIdeaCardFooter = Pick<
	Idea_Preview,
	'industry' | 'preview' | 'id' | 'idea_user' | 'idea_votes'
>;

const IdeaCardFooter = (idea: TIdeaCardFooter): JSX.Element => {
	const { industry, id, idea_user, idea_votes } = idea;

	return (
		<Flex
			alignItems={'center'}
			p={{ base: 2, sm: 3 }}
			borderWidth={1}
			borderTop={0}
			borderColor={'fpLightGrey.300'}
		>
			<HStack spacing={1}>
				<Text
					fontSize={{ base: 'xs', sm: 'sm' }}
					color={'fpPrimary.500'}
					title={
						'The country where the created user of this idea lives'
					}
				>
					{idea_user.country}
				</Text>
			</HStack>
			<PointSeparator small />
			<HStack spacing={1}>
				<Text
					fontSize={{ base: 'xs', sm: 'sm' }}
					color={'fpPrimary.500'}
					title={'The industry for this idea'}
				>
					{industry}
				</Text>
			</HStack>
			<HStack
				as={'span'}
				alignItems={'center'}
				justifyContent={'flex-end'}
				flex={1}
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
			</HStack>
		</Flex>
	);
};

export default memo(IdeaCardFooter);
