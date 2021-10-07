import Icon from '@chakra-ui/icon';
import { HStack, Text } from '@chakra-ui/layout';
import { BaseButton } from 'components/buttons';
import { FlexLayout } from 'components/layouts';
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
			title={'Upvote this idea'}
		>
			<FlexLayout
				alignItems={'baseline'}
				color={ideaVotes?.idea?.idea_votes ? 'green.300' : 'fpGrey.500'}
			>
				<BaseButton
					name={'upvote-idea-button'}
					variant={'unstyled'}
					d={'flex'}
					onClick={() => upsertIdeaVote()}
				>
					<Icon as={IoArrowUpSharp} fontSize={'large'} mr={2} />
					<Text
						fontSize={{ base: 'xs', sm: 'sm' }}
						fontWeight={'medium'}
						color={
							ideaVotes?.idea?.idea_votes
								? 'green.300'
								: 'fpGrey.500'
						}
					>
						{ideaVotes?.idea?.idea_votes_aggregate.aggregate.sum
							.vote_type ?? 0}
					</Text>
				</BaseButton>
			</FlexLayout>

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
