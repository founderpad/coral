import Icon from '@chakra-ui/icon';
import { HStack } from '@chakra-ui/layout';
import { BaseButton } from 'components/buttons';
import { Label } from 'components/labels';
import { FlexLayout } from 'components/layouts';
import { TIdea_Votes, useUpsertIdeaVoteMutation } from 'generated/api';
import React from 'react';
import { IoArrowUpSharp } from 'react-icons/io5';

export const Upvote = (
	ideaVotes: TIdea_Votes & { ideaId: string }
): JSX.Element => {
	const [upsertIdeaVote] = useUpsertIdeaVoteMutation({
		variables: {
			idea_vote: {
				idea_id: ideaVotes.ideaId,
				vote_type: 1
			}
		},
		onCompleted: () => {
			// console.log('data: ', data);
			// console.log('cache: ', cache);
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
					color={
						ideaVotes?.idea?.idea_votes ? 'green.300' : 'gray.500'
					}
				>
					<Icon as={IoArrowUpSharp} fontSize={'large'} mr={1} />
					<Label
						fontSize={{ base: 'xs', sm: 'sm' }}
						fontWeight={'normal'}
						label={
							ideaVotes?.idea?.idea_votes_aggregate.aggregate.sum
								.vote_type ?? 0
						}
						color={
							ideaVotes?.idea?.idea_votes
								? 'green.300'
								: 'gray.500'
						}
					/>
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
