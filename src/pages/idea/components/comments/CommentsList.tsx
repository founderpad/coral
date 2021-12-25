import Icon from '@chakra-ui/icon';
import { Box, StackProps } from '@chakra-ui/layout';
import { BaseButton } from 'components/buttons';
import BaseHeading from 'components/heading/BaseHeading';
import { CaptionLabel, Label } from 'components/labels';
import { BoxLayout, FlexLayout, StackLayout } from 'components/layouts';
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
import React, { useEffect } from 'react';
import { IoArrowUpSharp } from 'react-icons/io5';
import { formatDate } from 'utils/validators';

const ChatContainer = ({ children }: { children: Array<JSX.Element> }) => (
	<StackLayout
		pb={2}
		boxShadow={'sm'}
		// bg={'gray.50'}
		spacing={0}
		style={{
			borderRadius: '0 10px 10px'
		}}
		wordBreak={'break-all'}
	>
		{children}
	</StackLayout>
);

const MessageLayout = ({
	children,
	comment,
	actions = true
}: {
	children?: JSX.Element;
	comment: any;
	actions?: boolean;
	divider?: boolean;
}): JSX.Element => {
	const { user, updated_at, value } = comment;
	const { first_name } = user;
	return (
		<React.Fragment>
			<StackLayout
				direction={'row'}
				spacing={2}
				w={'full'}
				id={comment.id}
			>
				<UserAvatar size={'xs'} />
				<StackLayout spacing={0} w={{ base: 'full' }}>
					<ChatContainer>
						<FlexLayout
							alignItems={'center'}
							justifyContent={'space-between'}
						>
							<FlexLayout alignItems={'center'} mb={1}>
								<Label
									fontWeight={'medium'}
									fontSize={'xs'}
									maxW={'80%'}
									isTruncated
								>
									{first_name}
								</Label>
								<PointSeparator small />
								<CaptionLabel>
									{formatDate(updated_at, true)}
								</CaptionLabel>
							</FlexLayout>
						</FlexLayout>
						<Label
							color={'gray.500'}
							fontSize={'xs'}
							fontWeight={'normal'}
						>
							{value}
						</Label>
					</ChatContainer>
					<Actions showReply={!!actions} comment={comment} />
					{children}
				</StackLayout>
			</StackLayout>
		</React.Fragment>
	);
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
	const { id } = comment;
	return (
		<StackLayout
			direction={'row'}
			spacing={1}
			alignItems={'center'}
			justifyContent={'space-between'}
		>
			<BaseButton
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
			</BaseButton>
			{showReply && <PostReplyComment commentId={id} />}
			<CommentMenu {...comment} />
		</StackLayout>
	);
};

const CommentMenu = (comment: any): JSX.Element => {
	const { value, user } = comment;
	const {
		id,
		display_name,
		account: { email }
	} = user;
	return (
		<BaseMenu>
			<ReportMenu
				title={'comment'}
				content={`"${value}"`}
				report={{
					type: 'COMMENT',
					reported_user_id: id,
					recipient_name: display_name,
					recipient_email: email,
					content: value
				}}
			/>
		</BaseMenu>
	);
};

export const CommentsList = ({
	display = 'flex'
}: {
	display?: StackProps['display'];
}): JSX.Element => {
	const router = useRouter();

	const { data, loading, fetchMore } = useGetCommentsForIdeaQuery({
		variables: {
			ideaId: router.query.id
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
			// maxW={{ base: '100%', md: 340 }}
			transition={'ease-in-out'}
			transitionDelay={'1s'}
			p={0}
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
				borderBottomWidth={1}
			>
				All comments ({data?.comments?.length})
			</BaseHeading>
			<Box flexShrink={0} p={4}>
				<PostComment />
			</Box>
			{data?.comments.length < 1 ? (
				<NoResults label={'comments yet'} />
			) : (
				<StackLayout
					flexGrow={1}
					overflowY={'auto'}
					minHeight={'2em'}
					p={4}
				>
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
	const { data } = useGetRepliesForCommentQuery({
		variables: {
			commentId
		}
	});

	if (data?.replies?.length)
		return (
			<StackLayout spacing={4} pt={4} rounded={'none'} pl={2}>
				{data?.replies?.map((reply, _index) => {
					return (
						<MessageLayout
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
