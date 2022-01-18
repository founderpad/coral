import { PrimaryButton } from '@components/buttons';
import { SubheadingText } from '@components/heading';
import { FlexLayout, StackLayout } from '@components/layouts';
import { PointSeparator } from '@components/shared';
import IdeaContext from '@context/idea/IdeaContext';
import {
	TIdeas,
	TIdea_Preview,
	TIdea_Votes,
	TIdea_Votes_Aggregate
} from '@generated/api';
import React, { memo, useCallback, useContext, useState } from 'react';
import IdeaUpvote from './IdeaUpvote';
import InterestedTotal from './InterestedTotal';
import PublishedLabel from './PublishedLabel';

type TIdeaUpvote = Pick<
	TIdeas | TIdea_Preview,
	'votes' | 'votes_aggregate' | 'id' | 'name'
>;

export const IdeaTitleHeader = memo(() => {
	const [showComments, setShowComments] = useState(false);
	const {
		data: { idea }
	} = useContext(IdeaContext);

	const {
		isPublished,
		totalInterested = 0,
		id,
		name,
		votes,
		votes_aggregate
	} = idea ?? {};

	const ideaUpvote: TIdeaUpvote = {
		id,
		name,
		votes: votes as TIdea_Votes[],
		votes_aggregate: votes_aggregate as TIdea_Votes_Aggregate
	};

	const onShowCommentsClick = useCallback(() => {
		setShowComments(!showComments);

		document.getElementById('idea-comments')?.scrollIntoView({
			behavior: 'smooth'
		});
	}, [showComments]);

	return (
		<FlexLayout wordBreak={'break-all'} flexDirection={'column'}>
			<SubheadingText>{name}</SubheadingText>
			<FlexLayout justifyContent={'space-between'} alignItems={'center'}>
				<StackLayout
					direction={'row'}
					spacing={1}
					pt={2}
					alignItems={'center'}
				>
					{isPublished && (
						<PublishedLabel isPublished={isPublished} />
					)}
					{totalInterested > 0 && (
						<React.Fragment>
							<PointSeparator small />
							<InterestedTotal total={totalInterested} />
						</React.Fragment>
					)}
					<PointSeparator small />
					{idea && <IdeaUpvote {...ideaUpvote} />}
				</StackLayout>

				<PrimaryButton
					name={'show-comments'}
					variant={'ghost'}
					onClick={onShowCommentsClick}
					display={{ base: 'none', md: 'block' }}
					alignContent={'center'}
				>
					View comments
				</PrimaryButton>
			</FlexLayout>
		</FlexLayout>
	);
});

export default IdeaTitleHeader;
