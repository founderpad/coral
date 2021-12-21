import { CaptionLabel, Label } from 'components/labels';
import { FlexLayout, StackLayout } from 'components/layouts';
import { BaseMenu } from 'components/menu';
import {
	Loading,
	NoResults,
	PointSeparator,
	UserAvatar
} from 'components/shared';
import ReportMenu from 'components/shared/actionsmenu/ReportMenu';
import PostReplyComment from 'components/shared/PostReplyComment';
import {
	useGetCommentsForIdeaQuery,
	useGetRepliesForCommentSubscription
} from 'generated/api';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { formatDate } from 'utils/validators';

const CommentsTab = (): JSX.Element => (
	<StackLayout w={'full'} spacing={8} p={4}>
		{/* <TabActions /> */}
		<FlexLayout direction={'column'}>
			<CommentsList />
		</FlexLayout>
	</StackLayout>
);

const MessageLayout = ({
	children,
	comment,
	actions = true,
	divider = false
}: {
	children?: JSX.Element;
	comment: any;
	actions?: boolean;
	divider?: boolean;
}): JSX.Element => {
	return (
		<React.Fragment>
			<StackLayout
				direction={'row'}
				spacing={2}
				w={'full'}
				rounded={'none'}
				// borderLeftWidth={divider && 3}
				// pl={4}
			>
				<UserAvatar size={'xs'} />
				<StackLayout spacing={0} w={{ base: 'full' }}>
					<StackLayout
						px={2}
						py={1}
						boxShadow={'sm'}
						bg={'white'}
						spacing={0}
					>
						<FlexLayout
							alignItems={'center'}
							justifyContent={'space-between'}
						>
							<FlexLayout alignItems={'center'}>
								<Label fontWeight={'medium'} fontSize={'xs'}>
									{comment?.user.display_name}
								</Label>
								<PointSeparator small />
								<CaptionLabel>
									{formatDate(comment?.updated_at, true)}
								</CaptionLabel>
							</FlexLayout>
							{/* <CommentMenu {...comment} /> */}
						</FlexLayout>
						<Label
							color={'gray.500'}
							fontSize={'xs'}
							fontWeight={'normal'}
						>
							{comment?.value}
						</Label>
					</StackLayout>
					<Actions showReply={!!actions} comment={comment} />
					{children}
				</StackLayout>
			</StackLayout>
		</React.Fragment>
	);
};

// const TabActions = (): JSX.Element => (
// 	<FlexLayout justifyContent={'flex-end'}>
// 		<PostComment />
// 	</FlexLayout>
// );

const CommentsList = (): JSX.Element => {
	const router = useRouter();

	const { data, loading, fetchMore } = useGetCommentsForIdeaQuery({
		variables: {
			ideaId: router.query.id,
			offset: 0,
			limit: 30
		}
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
	if (!loading && data?.comments.length < 1)
		return <NoResults label={'comments yet'} />;

	return (
		<StackLayout w={'full'} p={0}>
			{data?.comments.map((comment, _index) => (
				<Comment key={comment.id} {...comment} />
			))}
		</StackLayout>
	);
};

const RepliesList = ({ commentId }: { commentId: string }): JSX.Element => {
	const { data } = useGetRepliesForCommentSubscription({
		variables: {
			commentId
		}
	});

	if (data?.replies?.length)
		return (
			<StackLayout
				spacing={4}
				pt={4}
				// borderLeftWidth={2}
				rounded={'none'}
				pl={2}
			>
				{data?.replies?.map((reply, _index) => (
					<MessageLayout
						key={_index}
						actions={false}
						comment={reply}
					/>
				))}
			</StackLayout>
		);

	return null;
};

const Comment = (comment: any): JSX.Element => (
	<MessageLayout comment={comment} divider={true}>
		{/* {comment?.idea_replies?.length > 0 && ( */}
		<RepliesList commentId={comment.id} />
		{/* )} */}
	</MessageLayout>
);

const Actions = ({
	showReply,
	comment
}: {
	showReply: boolean;
	comment: any;
}): JSX.Element => {
	return (
		<StackLayout
			direction={'row'}
			spacing={1}
			alignItems={'center'}
			justifyContent={'space-between'}
		>
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
			{showReply && <PostReplyComment commentId={comment.id} />}
			<CommentMenu {...comment} />
		</StackLayout>
	);
};

const CommentMenu = (comment: any): JSX.Element => {
	return (
		<BaseMenu>
			<ReportMenu
				title={'comment'}
				content={`"${comment.value}"`}
				report={{
					type: 'COMMENT',
					reported_user_id: comment.user.id,
					recipient_name: comment.user.display_name,
					recipient_email: comment.user.account.email,
					content: comment.value
				}}
			/>
		</BaseMenu>
	);
};

export default CommentsTab;
