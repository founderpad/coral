import { Button, Icon } from '@chakra-ui/react';
import { PrimaryButton } from '@components/buttons';
import { SubheadingText } from '@components/heading';
import { FlexLayout, StackLayout } from '@components/layouts';
import { PointSeparator } from '@components/shared';
import PostComment from '@components/shared/PostComment';
import {
	TIdeas,
	TIdea_Preview,
	TIdea_Votes,
	TIdea_Votes_Aggregate
} from '@generated/api';
import { useMobile, useModalDrawer } from '@hooks/util';
import React, { useCallback, useState } from 'react';
import { IoChatboxOutline } from 'react-icons/io5';
import useIdea, { useIdeaFragment } from '../query/ideaQuery';
import CommentsList from './comments/CommentsList';
import IdeaUpvote from './IdeaUpvote';
import InterestedTotal from './InterestedTotal';
import PublishedLabel from './PublishedLabel';

type TIdeaUpvote = Pick<
	TIdeas | TIdea_Preview,
	'votes' | 'votes_aggregate' | 'id' | 'name'
>;

export const IdeaTitleHeader = () => {
	const [showComments, setShowComments] = useState(false);
	const { setModalDrawer } = useModalDrawer();
	const isMobile = useMobile();
	const { totalComments } = useIdeaFragment() ?? {};

	const onShowCommentsClick = useCallback(() => {
		setShowComments(!showComments);

		document.getElementById('idea-comments')?.scrollIntoView({
			behavior: 'smooth'
		});
	}, [showComments]);

	const onShowCommentsMobile = useCallback(() => {
		setModalDrawer({
			title: ` ${totalComments} Comments`,
			isOpen: true,
			showCancel: false,
			action: <PostComment />,
			body: <CommentsList />,
			contentHeight: '99.1%',
			size: '2xl'
		});
	}, [setModalDrawer]);

	return (
		<FlexLayout wordBreak="break-all" flexDirection="column">
			<IdeaName />
			<FlexLayout justifyContent="space-between" alignItems="flex-end">
				<IdeaActions />

				{isMobile ? (
					<Button
						name="view-comments-mobile"
						size="sm"
						variant="unstyled"
						onClick={onShowCommentsMobile}
						leftIcon={<Icon as={IoChatboxOutline} fontSize="lg" />}
						_selected={{ background: 'transparent' }}
						d="flex"
						alignItems="center"
						color="fpGrey.300"
					>
						{totalComments}
					</Button>
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
			<PointSeparator small />
			<IdeaUpvote {...ideaUpvote} />
		</StackLayout>
	);
};

export default IdeaTitleHeader;
