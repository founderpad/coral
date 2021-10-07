import Icon from '@chakra-ui/icon';
import { Flex, HStack, Text } from '@chakra-ui/layout';
import { Idea_Votes, useUpsertIdeaVoteMutation } from 'generated/graphql';
import { cache } from 'pages/_app';
import React from 'react';
import { IoArrowUpSharp } from 'react-icons/io5';

export const Upvote = (
	ideaVotes: Idea_Votes & { ideaId: string }
): JSX.Element => {
	const [upsertIdeaVote] = useUpsertIdeaVoteMutation({
		variables: {
			idea_vote: {
				idea_id: ideaVotes.ideaId,
				vote_type: 1
			}
		},
		onCompleted: (data) => {
			console.log('data: ', data);
			console.log('cache: ', cache);
		}
	});

	return (
		<HStack
			alignItems={'center'}
			cursor={'pointer'}
			_hover={{ color: 'fpGrey.900' }}
			color={'fpGrey.500'}
			onClick={() => upsertIdeaVote()}
			title={'Upvote this idea'}
		>
			<Flex alignItems={'center'}>
				<Icon
					as={IoArrowUpSharp}
					color={
						ideaVotes?.idea?.idea_votes ? 'green.300' : 'fpGrey.500'
					}
					fontSize={'lg'}
					title={'Upvote this idea'}
					mr={2}
					cursor={'pointer'}
				/>
				<Text
					fontSize={{ base: 'xs', sm: 'sm' }}
					fontWeight={'medium'}
					color={
						ideaVotes?.idea?.idea_votes ? 'green.300' : 'fpGrey.500'
					}
				>
					{ideaVotes?.idea?.idea_votes_aggregate.aggregate.sum
						.vote_type ?? 0}
				</Text>
			</Flex>

			{/* <Flex>
                <Icon
                    as={IoArrowDownCircleOutline}
                    color={ideaVotes?.idea?.idea_votes ? 'red.500' : 'fpGrey.500'}
                    fontSize={{ base: 'md', sm: 'x-large' }}
                    title={'Upvote this idea'}
                    mr={2}
                    cursor={'pointer'}
                />
                <Text fontSize={{ base: 'xs', sm: 'large' }} fontWeight={'medium'} color={ideaVotes?.idea?.idea_votes ? 'red.500' : 'fpGrey.500'}>
                    {ideaVotes?.idea?.idea_votes_aggregate.aggregate.sum.vote_type ?? 0}
                </Text>
            </Flex> */}
		</HStack>
	);
};
