import { CaptionLabel, Label, SubLabel } from 'components/labels';
import { FlexLayout, StackLayout } from 'components/layouts';
import { BaseMenu } from 'components/menu';
import {
	Loading,
	NoResults,
	PointSeparator,
	UserAvatar
} from 'components/shared';
import ReportMenu from 'components/shared/actionsmenu/ReportMenu';
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
				borderLeftWidth={divider && 3}
				pl={4}
			>
				<UserAvatar size={'sm'} />
				<StackLayout spacing={0} w={{ base: 'full' }}>
					<StackLayout
						px={2}
						py={1}
						boxShadow={'sm'}
						bg={'gray.50'}
						spacing={0}
					>
						<FlexLayout
							alignItems={'center'}
							justifyContent={'space-between'}
						>
							<FlexLayout alignItems={'center'}>
								<SubLabel fontWeight={'medium'}>
									{comment?.user.display_name}
								</SubLabel>
								<PointSeparator small />
								<CaptionLabel>
									{formatDate(comment?.updated_at, true)}
								</CaptionLabel>
							</FlexLayout>
							<CommentMenu {...comment} />
						</FlexLayout>
						<Label
							color={'gray.500'}
							fontSize={'small'}
							fontWeight={'normal'}
						>
							{comment?.value}
						</Label>
					</StackLayout>
					<Actions showReply={!!actions} {...comment} />
					{children}
				</StackLayout>
			</StackLayout>
		</React.Fragment>
	);
};

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
				<MessageLayout key={_index} actions={false} comment={reply} />
			))}
		</StackLayout>
	);
};

const Comment = (comment: any): JSX.Element => (
	<MessageLayout comment={comment} divider={true}>
		{/* {comment?.idea_replies?.length > 0 && ( */}
		<RepliesList commentId={comment.id} />
		{/* )} */}
	</MessageLayout>
);

const Actions = (
	{ showReply }: { showReply: boolean },
	comment: any
): JSX.Element => (
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
		{showReply && <PostReplyComment commentId={comment.id} />}
	</StackLayout>
);

const CommentMenu = (comment: any): JSX.Element => {
	return (
		<BaseMenu>
			<ReportMenu
				title={'comment'}
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

// const ReportComment = ({
// 	id,
// 	type
// }: {
// 	id: string;
// 	type: string;
// }): JSX.Element => {
// 	return (
// 		// <IconButton aria-label={'Report'} size={'sm'} variant={'unstyled'}>
// 		// 	<Icon as={IoFlagSharp} />
// 		// </IconButton>

// 	);
// };

export default CommentsTab;
