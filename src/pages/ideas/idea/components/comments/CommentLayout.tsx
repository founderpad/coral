import { CaptionLabel, Label } from '@/components/labels';
import { FlexLayout, StackLayout } from '@/components/layouts';
import { PointSeparator, UserAvatar } from '@/components/shared';
import BaseTag from '@/components/tags/BaseTag';
import { TCommentFieldsFragment } from '@/generated/api';
import { useQueryParam } from '@/hooks/util';
import useIdea from '@/pages/ideas/idea/query/ideaQuery';
import { formatDate } from '@/utils/validators';
import { TagLeftIcon } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { AiTwotoneThunderbolt } from 'react-icons/ai';
import { CommentActions } from './CommentActions';

const ChatContainer = ({
	children,
	isBoost = false
}: {
	children: Array<JSX.Element>;
	isBoost: boolean;
}) => (
	<StackLayout
		p={2}
		bg="fpLightGrey.300"
		spacing={0}
		style={{
			borderRadius: '0 10px 10px'
		}}
		borderWidth={2}
		borderColor={isBoost ? 'purple.500' : 'transparent'}
		position="relative"
	>
		{isBoost && (
			<BaseTag
				position="absolute"
				top={0}
				right={0}
				borderTopLeftRadius="none"
				borderBottomRightRadius="none"
				bg="purple.500"
				borderWidth={0}
				color="white"
			>
				<TagLeftIcon as={AiTwotoneThunderbolt} mr={1} />
				Boost
			</BaseTag>
		)}
		{children}
	</StackLayout>
);

export const CommentLayout = ({
	children,
	comment,
	actions = true
}: {
	children?: React.ReactNode;
	comment: TCommentFieldsFragment | any;
	actions?: boolean;
	divider?: boolean;
}) => {
	const { user, updatedAt, value, status } = comment ?? {};
	const anchoredId = useQueryParam<string>('d');
	const { idea } = useIdea() ?? {};

	const isAuthor = idea?.userId === comment.user?.id;

	const backgroundColor =
		!!anchoredId && anchoredId === comment.id ? 'gray.50' : 'inherit';

	useEffect(() => {
		if (anchoredId) {
			document.getElementById(anchoredId)?.scrollIntoView({
				behavior: 'smooth'
			});
		}
	});

	return (
		<React.Fragment>
			<StackLayout
				direction="row"
				spacing={2}
				w="full"
				id={comment.id ?? ''}
				p={2}
				bg={backgroundColor}
				borderLeftWidth={actions ? 4 : 3}
			>
				<UserAvatar size="sm" src={comment.user?.avatarUrl ?? ''} />
				<StackLayout spacing={0} w={{ base: 'full' }}>
					<ChatContainer isBoost={comment.isBoost}>
						<FlexLayout
							alignItems="center"
							justifyContent="space-between"
							flex={1}
						>
							<FlexLayout alignItems="center" mb={1}>
								<Label
									fontWeight="medium"
									fontSize="small"
									css={{ whiteSpace: 'normal' }}
									wordBreak="break-word"
									noOfLines={1}
									// isTruncated
									flex={1}
								>
									{user?.displayName}
								</Label>
								{isAuthor && (
									<BaseTag
										color="white"
										bg="fpPrimary.700"
										ml={1}
										fontSize="x-small"
										size="sm"
									>
										Creator
									</BaseTag>
								)}
								<PointSeparator small />
								<CaptionLabel>
									{formatDate(updatedAt, true)}
								</CaptionLabel>
							</FlexLayout>
						</FlexLayout>
						<Label
							color={
								status === 'APPROVED' ? 'fpGrey.500' : 'initial'
							}
							fontSize="small"
							fontWeight={
								status === 'PENDING' ? 'bold' : 'initial'
							}
							pt={1}
						>
							{value}
						</Label>
					</ChatContainer>
					<CommentActions showReply={!!actions} comment={comment} />
					{children}
				</StackLayout>
			</StackLayout>
		</React.Fragment>
	);
};

export default CommentLayout;
