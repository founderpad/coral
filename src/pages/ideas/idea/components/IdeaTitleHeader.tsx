import { PrimaryButton } from '@/components/buttons';
import { SubheadingText } from '@/components/heading';
import { FlexLayout, StackLayout } from '@/components/layouts';
import { PointSeparator } from '@/components/shared';
import {
	TIdeas,
	TIdea_Preview,
	TIdea_Votes,
	TIdea_Votes_Aggregate
} from '@/generated/api';
import { useMobile } from '@/hooks/util';
import { percentageBoosted } from '@/utils/validators';
import { Tag, TagLeftIcon } from '@chakra-ui/react';
import React, { useCallback, useState } from 'react';
import { AiTwotoneThunderbolt } from 'react-icons/ai';
import useIdea, { useIdeaFragment } from '../query/ideaQuery';
import IdeaUpvote from './IdeaUpvote';
import InterestedTotal from './InterestedTotal';
import PublishedLabel from './PublishedLabel';
import MobileCommentsList from './comments/MobileCommentsList';

type TIdeaUpvote = Pick<
	TIdeas | TIdea_Preview,
	'votes' | 'votes_aggregate' | 'id' | 'name'
>;

export const IdeaTitleHeader = () => {
	const [showComments, setShowComments] = useState(false);
	const isMobile = useMobile();

	const onShowCommentsClick = useCallback(() => {
		setShowComments(!showComments);

		document.getElementById('idea-comments')?.scrollIntoView({
			behavior: 'smooth'
		});
	}, [showComments]);

	return (
		<FlexLayout wordBreak="break-word" flexDirection="column">
			<IdeaName />
			<FlexLayout justifyContent="space-between" alignItems="flex-end">
				<IdeaActions />

				{isMobile ? (
					<MobileCommentsList />
				) : (
					<PrimaryButton
						name="show-comments"
						variant="ghost"
						onClick={onShowCommentsClick}
						alignContent="center"
					>
						View comments
					</PrimaryButton>
				)}
			</FlexLayout>
		</FlexLayout>
	);
};

const IdeaName = () => {
	const { name } = useIdeaFragment() ?? {};
	return <SubheadingText pb={4}>{name}</SubheadingText>;
};

const IdeaActions = () => {
	const { idea } = useIdea() ?? {};
	const {
		interested_aggregate,
		isPublished = true,
		id,
		name,
		votes,
		votes_aggregate
	} = idea ?? {};
	const totalInterested = interested_aggregate?.aggregate?.count ?? 0;

	const ideaUpvote: TIdeaUpvote = {
		id,
		name,
		votes: votes as TIdea_Votes[],
		votes_aggregate: votes_aggregate as TIdea_Votes_Aggregate // need to make these fragments to use types!
	};

	return (
		<StackLayout direction="row" spacing={2} pt={2} alignItems="center">
			<PublishedLabel isPublished={isPublished} />

			{totalInterested > 0 && <InterestedTotal total={totalInterested} />}
			{idea?.boosted_idea?.ideaId && (
				<Tag
					fontSize="11px"
					size="sm"
					px={3}
					py={1}
					bg="purple.500"
					color="white"
				>
					<TagLeftIcon as={AiTwotoneThunderbolt} mr={1} />
					{percentageBoosted(
						idea.boosted_idea?.remainingCurrencyAmount
					)}
					% boosted
				</Tag>
			)}
			<PointSeparator small />
			<IdeaUpvote {...ideaUpvote} />
		</StackLayout>
	);
};

export default IdeaTitleHeader;
