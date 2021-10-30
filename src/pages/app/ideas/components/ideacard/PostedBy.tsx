import { Label } from 'components/labels';
import { FlexLayout } from 'components/layouts';
import { BaseLink } from 'components/links';
import { PointSeparator, UserAvatar } from 'components/shared';
import { TIdea_Preview } from 'generated/api';
import React from 'react';
import { formatDate } from 'utils/validators';

type TProps = Pick<TIdea_Preview, 'idea_user' | 'created_at'>;

export const PostedBy = ({ idea_user, created_at }: TProps): JSX.Element => (
	<FlexLayout
		alignItems={'center'}
		lineHeight={'16px'}
		fontSize={{ base: '11px', sm: 'xs' }}
	>
		<FlexLayout alignItems={'center'}>
			<UserAvatar
				size={'sm'}
				src={idea_user?.avatar_url}
				borderWidth={5}
				display={{ base: 'none', sm: 'block' }}
			/>
			<BaseLink
				href={`/app/user/${idea_user?.id}`}
				title={'The user who posted this idea'}
				_hover={{ color: 'gray.700' }}
				color={'gray.500'}
			>
				Posted by {idea_user?.first_name}
			</BaseLink>
		</FlexLayout>
		<PointSeparator color={'gray.500'} small />
		<Label
			color={'gray.500'}
			title={'When the idea was posted'}
			label={formatDate(created_at)}
			fontSize={'xs'}
		/>
	</FlexLayout>
);

export default PostedBy;
