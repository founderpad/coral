import { Box, StackProps } from '@chakra-ui/layout';
import BaseHeading from 'components/heading/BaseHeading';
import { BoxLayout, StackLayout } from 'components/layouts';
import { Loading, NoResults } from 'components/shared';
import PostComment from 'components/shared/PostComment';
import {
	useCommentsForIdeaQuery,
	useRepliesForCommentQuery
} from 'generated/api';
import { useQueryParam } from 'hooks/util';
import React, { useEffect } from 'react';
import CommentLayout from './CommentLayout';

const Comment = (comment: any): JSX.Element => (
	<CommentLayout comment={comment} divider={true}>
		{/* {comment?.idea_replies?.length > 0 && ( */}
		<RepliesList commentId={comment.id} />
		{/* )} */}
	</CommentLayout>
);

export const CommentsList = ({
	display = 'flex'
}: {
	display?: StackProps['display'];
}): JSX.Element => {
	const { data, loading, fetchMore } = useCommentsForIdeaQuery({
		variables: {
			ideaId: useQueryParam('id')
			// offset: 0,
			// limit: 30
		},
		fetchPolicy: 'network-only',
		nextFetchPolicy: 'cache-first'
	});

	useEffect(() => {
		window.addEventListener('scroll', onScrollToBottom);
		return () => window.removeEventListener('scroll', onScrollToBottom);
	});

	const onScrollToBottom = (e) => {
		if (
			e.target.scrollTop + e.target.clientHeight ===
			e.target.scrollHeight
		) {
			console.log('LOAD MORE');
		}
	};

	if (loading) return <Loading small />;

	return (
		<BoxLayout
			w={'full'}
			h={'full'}
			d={'flex'}
			flexDirection={'column'}
			flexWrap={'nowrap'}
			transition={'ease-in-out'}
			transitionDelay={'1s'}
			px={{ base: 1, sm: 0 }}
			justifyContent={'center'}
			display={display}
			id={'idea-comments'}
		>
			<BaseHeading
				fontSize={'sm'}
				as={'h4'}
				flexShrink={0}
				py={4}
				px={{ base: 4, md: 0 }}
				borderTopWidth={{ base: 0, md: 1 }}
			>
				{data?.comments?.length} Comments
			</BaseHeading>
			<Box flexShrink={0} px={2} py={6}>
				<PostComment />
			</Box>
			{data?.comments.length < 1 ? (
				<NoResults label={'comments yet'} />
			) : (
				<StackLayout flexGrow={1} overflowY={'auto'} minHeight={'2em'}>
					{data?.comments.map((comment, _index) => (
						<Comment key={comment.id} {...comment} />
					))}
				</StackLayout>
			)}
			{/* <Box flexShrink={0} py={2} px={4} borderTopWidth={1}>
				<PostComment />
			</Box> */}
		</BoxLayout>
	);
};

const RepliesList = ({ commentId }: { commentId: string }): JSX.Element => {
	const { data } = useRepliesForCommentQuery({
		variables: {
			commentId
		}
	});

	if (data?.replies?.length)
		return (
			<StackLayout spacing={0} pt={4} rounded={'none'} pl={2}>
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
