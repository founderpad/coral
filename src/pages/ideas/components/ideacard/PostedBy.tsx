import { Label } from 'components/labels';
import { FlexLayout } from 'components/layouts';
import { BaseLink } from 'components/links';
import { PointSeparator } from 'components/shared';
import { TIdea_Preview } from 'generated/api';
import React from 'react';
import { formatDate } from 'utils/validators';

type TProps = Pick<TIdea_Preview, 'idea_user' | 'created_at'>;

export const PostedBy = ({ idea_user, created_at }: TProps): JSX.Element => (
	<FlexLayout
		position={'relative'}
		alignItems={'center'}
		lineHeight={'16px'}
		fontSize={{ base: '11px', sm: 'xs' }}
	>
		<FlexLayout alignItems={'center'}>
			<BaseLink
				href={`/user/${idea_user?.id}`}
				title={'The user who posted this idea'}
				_hover={{ color: 'gray.700' }}
				color={'gray.400'}
			>
				{idea_user?.first_name}
			</BaseLink>
			{idea_user.country && (
				<Label
					color={'gray.400'}
					title={'When the idea was posted'}
					fontSize={'xs'}
				>
					, {idea_user.country}
				</Label>
			)}
		</FlexLayout>
		<PointSeparator color={'gray.500'} small />
		<Label
			color={'gray.400'}
			title={'When the idea was posted'}
			fontSize={'xs'}
		>
			{formatDate(created_at)}
		</Label>
	</FlexLayout>
);

export default PostedBy;
