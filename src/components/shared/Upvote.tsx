import Icon from '@chakra-ui/icon';
import { BaseButton } from 'components/buttons';
import { TIdea_Votes, useUpsertIdeaVoteMutation } from 'generated/api';
import { GET_IDEAS } from 'graphql/ideas';
import React from 'react';
import { IoArrowUpSharp } from 'react-icons/io5';

export const Upvote = (
	ideaVotes: TIdea_Votes & { ideaId: string }
): JSX.Element => {
	// const [upsertIdeaVote] = useUpsertIdeaVoteMutation({
	// 	variables: {
	// 		idea_vote: {
	// 			idea_id: ideaVotes.ideaId,
	// 			vote_type: 1
	// 		}
	// 	}
	// });

	const [upsertIdeaVote] = useUpsertIdeaVoteMutation({
		variables: {
			idea_vote: {
				idea_id: ideaVotes.ideaId,
				vote_type: 1
			}
		},
		refetchQueries: [{ query: GET_IDEAS }]
	});

	return (
		// <StackLayout
		// 	pr={{ base: 1, sm: 2 }}
		// 	rounded={'none'}
		// 	justifyContent={'space-between'}
		// 	alignItems={'center'}
		// 	spacing={0}
		// >
		// 	<BaseButton
		// 		name={'upvote-idea-button'}
		// 		variant={'ghost'}
		// 		d={'flex'}
		// 		css={{ width: '0.8em !important' }}
		// 		color={ideaVotes?.idea?.idea_votes ? 'green.300' : 'gray.500'}
		// 		bg={ideaVotes?.idea?.idea_votes && 'green.50'}
		// 		_hover={{ bg: 'green.50' }}
		// 		onClick={() => upsertIdeaVote()}
		// 	>
		// 		<Icon as={IoArrowUpSharp} fontSize={'md'} pt={0} />
		// 	</BaseButton>
		// 	<Label
		// 		fontSize={{ base: 'sm', sm: 'md' }}
		// 		fontWeight={'medium'}
		// 		color={'gray.500'}
		// 	>
		// 		{ideaVotes?.idea?.idea_votes_aggregate.aggregate.sum
		// 			.vote_type ?? 0}
		// 	</Label>
		// 	<BaseButton
		// 		name={'downvote-idea-button'}
		// 		variant={'ghost'}
		// 		d={'flex'}
		// 		css={{ width: '0.8em !important' }}
		// 		color={'gray.500'}
		// 		_hover={{ bg: 'red.50' }}
		// 		onClick={() => upsertIdeaVote()}
		// 	>
		// 		<Icon as={IoArrowDownSharp} fontSize={'md'} />
		// 	</BaseButton>
		// </StackLayout>

		<BaseButton
			name={'upvote-idea-button'}
			variant={'unstyled'}
			d={'flex'}
			css={{ width: '0.8em !important' }}
			color={ideaVotes?.idea?.idea_votes ? 'green.300' : 'gray.500'}
			onClick={() => upsertIdeaVote()}
		>
			<Icon
				as={IoArrowUpSharp}
				fontSize={'lg'}
				pt={0}
				mr={1}
				_hover={{ color: 'green.300' }}
			/>
			{/* 4 */}
		</BaseButton>
	);
};
