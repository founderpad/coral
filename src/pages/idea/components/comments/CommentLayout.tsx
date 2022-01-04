import { CaptionLabel, Label } from 'components/labels';
import { FlexLayout, StackLayout } from 'components/layouts';
import { PointSeparator, UserAvatar } from 'components/shared';
import BaseTag from 'components/tags/BaseTag';
import IdeaContext from 'context/idea/IdeaContext';
import { useQueryParam } from 'hooks/util';
import React, { useContext, useEffect } from 'react';
import { formatDate } from 'utils/validators';
import CommentActions from './CommentActions';

const ChatContainer = ({ children }: { children: JSX.Element[] }) => (
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

const CommentLayout = ({
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
	const anchoredId = useQueryParam('d');

	const isAuthor =
		useContext(IdeaContext).data?.idea.user_id === comment.user.id;

	useEffect(() => {
		if (!!anchoredId) {
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
				bg={!!anchoredId && anchoredId === comment.id && 'gray.50'}
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
									{first_name}
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
					<CommentActions showReply={!!actions} comment={comment} />
					{children}
				</StackLayout>
			</StackLayout>
		</React.Fragment>
	);
};

export default CommentLayout;
