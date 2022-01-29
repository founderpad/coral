import { CaptionLabel, Label } from '@components/labels';
import { FlexLayout, StackLayout } from '@components/layouts';
import { PointSeparator, UserAvatar } from '@components/shared';
import BaseTag from '@components/tags/BaseTag';
import IdeaContext from '@context/idea/IdeaContext';
import { useQueryParam } from '@hooks/util';
import useIdea, { useIdeaFragment } from '@pages/idea/query/ideaQuery';
import { formatDate } from '@utils/validators';
import React, { useContext, useEffect } from 'react';
import CommentActions from './CommentActions';

const ChatContainer = ({ children }: { children: Array<JSX.Element> }) => (
	<StackLayout
		p={2}
		boxShadow={'sm'}
		bg={'gray.100'}
		spacing={0}
		style={{
			borderRadius: '0 10px 10px'
		}}
		wordBreak={'break-all'}
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
	const { displayName } = user;
	const anchoredId = useQueryParam('d');

	const isAuthor = useIdea().idea?.userId === comment.user.id;

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
				direction={'row'}
				spacing={2}
				w={'full'}
				id={comment.id}
				p={2}
				bg={
					!!anchoredId && anchoredId === comment.id
						? 'gray.50'
						: 'inherit'
				}
				borderLeftWidth={actions ? 4 : 3}
			>
				<UserAvatar size={'sm'} />
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
									{displayName}
								</Label>
								{isAuthor && (
									<BaseTag
										color={'white'}
										bg={'fpPrimary.700'}
										ml={1}
										fontSize={'x-small'}
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
							color={'gray.500'}
							fontSize={'xs'}
							fontWeight={'normal'}
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
