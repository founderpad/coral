import { CaptionLabel, Label } from '@components/labels';
import { FlexLayout, StackLayout } from '@components/layouts';
import { PointSeparator, UserAvatar } from '@components/shared';
import BaseTag from '@components/tags/BaseTag';
import { useQueryParam } from '@hooks/util';
import useIdea from '@pages/ideas/idea/query/ideaQuery';
import { formatDate } from '@utils/validators';
import React, { useEffect } from 'react';
import CommentActions from './CommentActions';

const ChatContainer = ({ children }: { children: Array<JSX.Element> }) => (
	<StackLayout
		p={2}
		bg="fpLightGrey.500"
		spacing={0}
		style={{
			borderRadius: '0 10px 10px'
		}}
	>
		{children}
	</StackLayout>
);

export const CommentLayout = ({
	children,
	comment,
	actions = true
}: {
	children?: React.ReactNode;
	comment: any;
	actions?: boolean;
	divider?: boolean;
}) => {
	const { user, updatedAt, value } = comment;
	const { displayName } = user ?? '';
	const anchoredId = useQueryParam<string>('d');

	const isAuthor = useIdea()?.idea?.userId === comment?.user.id;

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
				id={comment.id}
				p={2}
				bg={
					!!anchoredId && anchoredId === comment.id
						? 'gray.50'
						: 'inherit'
				}
				borderLeftWidth={actions ? 4 : 3}
			>
				<UserAvatar size="sm" src={comment.user.avatarUrl} />
				<StackLayout spacing={0} w={{ base: 'full' }}>
					<ChatContainer>
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
									wordBreak="break-all"
									noOfLines={1}
									isTruncated
									flex={1}
								>
									{displayName}
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
							color="fpGrey.500"
							fontSize="small"
							fontWeight="normal"
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
