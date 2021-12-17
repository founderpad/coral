import { CaptionLabel, Label, SubLabel } from 'components/labels';
import { FlexLayout, StackLayout } from 'components/layouts';
import {
	Loading,
	NoResults,
	PointSeparator,
	UserAvatar
} from 'components/shared';
import PostComment from 'components/shared/PostComment';
import PostReplyComment from 'components/shared/PostReplyComment';
import {
	useGetCommentsForIdeaQuery,
	useGetRepliesForCommentQuery
} from 'generated/api';
import { useRouter } from 'next/router';
import React from 'react';
import { formatDate } from 'utils/validators';

const MessageLayout = ({
	user,
	date,
	value,
	children,
	commentId,
	actions = true,
	divider = false
}: {
	user: string;
	date: string;
	value: string;
	children?: JSX.Element;
	commentId?: string;
	actions?: boolean;
	divider?: boolean;
}): JSX.Element => (
	<React.Fragment>
		<StackLayout
			direction={'row'}
			spacing={2}
			w={'full'}
			rounded={'none'}
			borderLeftWidth={divider && 3}
			pl={4}
		>
			<UserAvatar size={'sm'} />
			<StackLayout spacing={0} w={{ base: 'full', sm: 800 }}>
				<StackLayout
					px={2}
					py={1}
					boxShadow={'sm'}
					bg={'gray.50'}
					spacing={0}
				>
					<FlexLayout alignItems={'center'}>
						{' '}
						<SubLabel fontWeight={'medium'}>{user}</SubLabel>
						<PointSeparator small />
						<CaptionLabel>{formatDate(date, true)}</CaptionLabel>
					</FlexLayout>
					<Label
						color={'gray.500'}
						fontSize={'small'}
						fontWeight={'normal'}
					>
						{value}
					</Label>
				</StackLayout>
				{actions && <Actions commentId={commentId} />}
				{children}
			</StackLayout>
		</StackLayout>
	</React.Fragment>
);

const TabActions = (): JSX.Element => {
	return (
		<FlexLayout justifyContent={'flex-end'}>
			<PostComment />
		</FlexLayout>
	);
};

const CommentsTab = (): JSX.Element => (
	<StackLayout w={'full'} spacing={8}>
		<TabActions />
		<FlexLayout direction={'column'}>
			<CommentsList />
		</FlexLayout>
	</StackLayout>
);

const CommentsList = (): JSX.Element => {
	const router = useRouter();

	const { data, loading } = useGetCommentsForIdeaQuery({
		variables: {
			ideaId: router.query.id
		}
	});

	if (loading) return <Loading small />;
	if (!loading && data?.comments.length < 1)
		return <NoResults label={'comments yet'} />;

	return (
		<StackLayout w={'full'}>
			{data?.comments.map((comment, _index) => (
				<Comment key={comment.id} {...comment} />
			))}
		</StackLayout>
	);
};

const RepliesList = ({ commentId }: { commentId: string }): JSX.Element => {
	const { data } = useGetRepliesForCommentQuery({
		variables: {
			commentId
		}
	});

	return (
		<StackLayout
			spacing={4}
			pt={4}
			borderLeftWidth={2}
			rounded={'none'}
			pl={4}
		>
			{data?.replies?.map((reply, _index) => (
				<MessageLayout
					key={_index}
					user={reply.user.display_name}
					date={reply.updated_at}
					value={reply.value}
					actions={false}
				/>
			))}
		</StackLayout>
	);
};

const Comment = (comment: any): JSX.Element => {
	return (
		<MessageLayout
			user={comment.user.display_name}
			date={comment.updated_at}
			value={comment.value}
			divider={true}
			commentId={comment.id}
		>
			{/* {comment?.idea_replies?.length > 0 && ( */}
			<RepliesList commentId={comment.id} />
			{/* )} */}
		</MessageLayout>
	);
};

const Actions = ({ commentId }: { commentId: string }): JSX.Element => (
	<StackLayout direction={'row'} spacing={1} alignItems={'center'}>
		{/* <BaseButton name={'upvote-idea-button'} variant={'unstyled'} d={'flex'}>
			<Icon
				as={IoArrowUpSharp}
				fontSize={'sm'}
				mr={1}
				size={'sm'}
				fontWeight={'normal'}
				color={'gray.400'}
			/>
		</BaseButton> */}
		<PostReplyComment commentId={commentId} />
	</StackLayout>
);

export default CommentsTab;
