import { Box, Collapse, StackProps, useDisclosure } from '@chakra-ui/react';
import { PrimaryButton } from '@components/buttons';
import BaseHeading from '@components/heading/BaseHeading';
import { BoxLayout, StackLayout } from '@components/layouts';
import { Loading, NoResults } from '@components/shared';
import PostComment from '@components/shared/PostComment';
import {
	TCommentFieldsFragment,
	useCommentsForIdeaQuery,
	useRepliesForCommentQuery
} from '@generated/api';
import { useQueryParam } from '@hooks/util';
import React, { useEffect } from 'react';
import CommentLayout from './CommentLayout';

export const Comment = (comment: TCommentFieldsFragment) => {
	// const [showReplies, setShowReplies] = useState(false);
	const { isOpen, onToggle } = useDisclosure();

	// const onShowRepliesClick = useCallback(() => {
	// 	setShowReplies(!showReplies);
	// }, [showReplies]);

	return (
		<CommentLayout comment={comment} divider={true}>
			{!isOpen &&
				comment.firstReplies?.map((reply) => (
					<CommentLayout
						key={reply.id}
						actions={false}
						comment={reply}
					/>
				))}
			{comment?.totalReplies > 2 && (
				<React.Fragment>
					<Collapse in={isOpen}>
						<RepliesList commentId={comment.id} />
					</Collapse>
					<PrimaryButton
						name="show-replies"
						variant="link"
						fontSize="xs"
						onClick={onToggle}
					>
						{isOpen ? 'Hide replies' : 'Show more replies'}
					</PrimaryButton>
				</React.Fragment>
			)}
		</CommentLayout>
	);
};

export const CommentsList = ({
	display = 'flex'
}: {
	display?: StackProps['display'];
}) => {
	const id = useQueryParam('id');
	const { data, loading, fetchMore } = useCommentsForIdeaQuery({
		variables: {
			ideaId: id,
			offset: 0
		},
		fetchPolicy: 'network-only',
		nextFetchPolicy: 'network-only'
	});

	useEffect(() => {
		window.addEventListener('scroll', onScrollToBottom);
		return () => window.removeEventListener('scroll', onScrollToBottom);
	});

	const hasComments = data?.comments?.length ?? 0;
	const hasMoreComments =
		data?.totalComments?.aggregate?.count! > hasComments;

	const onScrollToBottom = () => {
		const bottom =
			Math.ceil(window.innerHeight + window.scrollY) >=
			document.documentElement.scrollHeight;
		if (bottom && hasMoreComments) {
			fetchMore({
				variables: {
					offset: data?.comments.length
				}
			});
		}
	};

	if (loading) return <Loading small />;

	return (
		<BoxLayout
			w="full"
			h="full"
			d="flex"
			flexDirection="column"
			flexWrap="nowrap"
			transition="ease-in-out"
			transitionDelay="1s"
			p={0}
			justifyContent="center"
			display={display}
		>
			<BaseHeading
				fontSize="sm"
				as="h4"
				flexShrink={0}
				py={4}
				px={{ base: 4, md: 0 }}
				borderTopWidth={{ base: 0, md: 1 }}
				borderBottomWidth={{ base: 1, md: 0 }}
				display={{ base: 'none', md: 'flex' }}
			>
				{data?.totalComments?.aggregate?.count} Comments
			</BaseHeading>
			<Box
				flexShrink={0}
				px={{ base: 4, md: 0 }}
				display={{ base: 'none', md: 'flex' }}
				py={6}
			>
				<PostComment />
			</Box>
			{hasComments < 1 ? (
				<NoResults label="comments yet" back={false} />
			) : (
				<StackLayout flexGrow={1} overflowY="auto" minHeight="2em">
					{data?.comments.map((comment, _index) => {
						if (comment.ideaId === id)
							return <Comment key={comment.id} {...comment} />;
					})}
				</StackLayout>
			)}
		</BoxLayout>
	);
};

const RepliesList = ({ commentId }: { commentId: string }) => {
	const { data } = useRepliesForCommentQuery({
		variables: {
			commentId
		},
		fetchPolicy: 'network-only'
	});

	if (data?.replies?.length)
		return (
			<StackLayout spacing={0} pt={4} rounded="none" pl={2}>
				{data?.replies?.map((reply, _index) => {
					return (
						<CommentLayout
							key={_index}
							actions={false}
							comment={reply}
						/>
					);
				})}
			</StackLayout>
		);

	return null;
};

export default CommentsList;
