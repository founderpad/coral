import { StackLayout } from '@components/layouts';
import PostReplyComment from '@components/shared/PostReplyComment';
import React from 'react';
import CommentMenu from './CommentMenu';

export const CommentActions = ({
	showReply,
	comment
}: {
	showReply: boolean;
	comment: any;
}) => {
	const { id } = comment;

	return (
		<StackLayout
			direction={'row'}
			spacing={1}
			alignItems={'center'}
			// justifyContent={'space-between'}
		>
			{/* <BaseButton
				name={'upvote-idea-button'}
				variant={'unstyled'}
				d={'flex'}
			>
				<Icon
					as={IoArrowUpSharp}
					fontSize={'sm'}
					mr={1}
					size={'sm'}
					fontWeight={'normal'}
					color={'gray.400'}
				/>
			</BaseButton> */}
			{showReply && (
				<PostReplyComment
					commentId={id}
					commentUserId={comment.user.id}
				/>
			)}
			<CommentMenu {...comment} />
		</StackLayout>
	);
};

export default CommentActions;
