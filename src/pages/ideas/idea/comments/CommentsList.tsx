import { Box } from '@chakra-ui/react';
import BaseHeading from '@/components/heading/BaseHeading';
import { BoxLayout, StackLayout } from '@/components/layouts';
import { Loading, NoResults } from '@/components/shared';
import PostComment from '@/components/shared/PostComment';
import { useQueryParam } from '@/hooks/util';
import React, { useEffect } from 'react';
import { useComments } from './hooks/useComments';
import Comment from './Comment';

export const CommentsList = ({ onScroll }: { onScroll?: () => void }) => {
	const id = useQueryParam('id');
	const { data, total, loading, fetchMore } = useComments();

	useEffect(() => {
		if (onScroll) {
			onScroll();
		} else {
			window.addEventListener('scroll', onScrollToBottom);
			return () => window.removeEventListener('scroll', onScrollToBottom);
		}
	});

	const hasComments = data?.length ?? 0;
	const hasMoreComments = total > hasComments;

	const onScrollToBottom = () => {
		const bottom =
			Math.ceil(window.innerHeight + window.scrollY) >=
			document.documentElement.scrollHeight;
		if (bottom && hasMoreComments) {
			fetchMore({
				variables: {
					offset: data?.length
				}
			});
		}
	};

	// const onShowCommentsClick = useCallback(() => {
	// 	setShowComments(!showComments);

	// 	document.getElementById('idea-comments')?.scrollIntoView({
	// 		behavior: 'smooth'
	// 	});
	// }, [showComments]);

	if (loading) return <Loading small />;

	return (
		<BoxLayout
			w="full"
			h="full"
			display="flex"
			flexDirection="column"
			flexWrap="nowrap"
			transition="ease-in-out"
			transitionDelay="1s"
			p={0}
			justifyContent="center"
		>
			<BaseHeading
				fontSize="sm"
				as="h4"
				flexShrink={0}
				py={4}
				px={{ base: 4, md: 0 }}
				borderBottomWidth={{ base: 1, md: 0 }}
				display={{ base: 'none', md: 'flex' }}
			>
				{total} Comments
			</BaseHeading>
			<Box
				flexShrink={0}
				px={{ base: 4, md: 0 }}
				display={{ base: 'none', md: 'flex' }}
				py={6}
				alignItems="center"
			>
				<PostComment />
			</Box>
			{hasComments < 1 ? (
				<NoResults label="comments yet" back={false} />
			) : (
				<StackLayout flexGrow={1} overflowY="auto" minHeight="2em">
					{data?.map((comment, _index) => {
						if (comment.ideaId === id)
							return <Comment key={comment.id} {...comment} />;
					})}
				</StackLayout>
			)}
		</BoxLayout>
	);
};

export default CommentsList;
