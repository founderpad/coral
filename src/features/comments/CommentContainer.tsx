import { CaptionLabel, Label } from '@/components/labels';
import { FlexLayout, StackLayout } from '@/components/layouts';
import { AvatarWithDetails, PointSeparator } from '@/components/shared';
import BaseTag from '@/components/tags/BaseTag';
import { TCommentFieldsFragment } from '@/generated/api';
import { useQueryParam } from '@/hooks/util';
import { formatDate } from '@/utils/validators';
import React, { useEffect } from 'react';
import useCachedIdea from '../idea/viewidea/query/ideaQuery';
import { CommentActions, CommentLayout } from './components';

interface CommentContainerProps {
	children?: React.ReactNode;
	comment: TCommentFieldsFragment | any;
	actions?: boolean;
}

export const CommentContainer = ({
	children,
	comment,
	actions = true
}: CommentContainerProps) => {
	const { user, updatedAt, value } = comment ?? {};
	const anchoredId = useQueryParam<string>('d');
	const { idea } = useCachedIdea() ?? {};

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
		<>
			<StackLayout
				direction="row"
				spacing={2}
				w="full"
				id={comment.id ?? ''}
				p={2}
				bg={backgroundColor}
				borderLeftWidth={actions ? 4 : 3}
			>
				<AvatarWithDetails src={comment.user?.avatarUrl} small />
				<StackLayout spacing={0} w={{ base: 'full' }}>
					<CommentLayout isBoost={comment.isBoost}>
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
									flex={1}
								>
									{user?.displayName
										? user?.displayName
										: '[Deleted]'}
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
						<Label color="fpGrey.500">{value}</Label>
					</CommentLayout>
					<CommentActions showReply={!!actions} comment={comment} />
					{children}
				</StackLayout>
			</StackLayout>
		</>
	);
};

export default CommentContainer;
