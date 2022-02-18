import { Label } from '@components/labels';
import { FlexLayout } from '@components/layouts';
import { BaseLink } from '@components/links';
import { PointSeparator } from '@components/shared';
import { TIdeaPreviewFieldsFragment } from '@generated/api';
import { formatDate } from '@utils/validators';
import React from 'react';

type TProps = Pick<TIdeaPreviewFieldsFragment, 'user' | 'created_at'>;

export const PostedBy = ({ user, created_at }: TProps) => (
	<FlexLayout
		position={'relative'}
		alignItems={'center'}
		lineHeight={'0.875rem'}
		fontSize={{ base: '11px', sm: 'xs' }}
	>
		<BaseLink
			href={`/user/${user?.id}`}
			title={'The user who posted this idea'}
			_hover={{ color: 'gray.700' }}
			fontSize={'x-small'}
			color={'fpGrey.500'}
		>
			{user?.displayName}
		</BaseLink>
		<Label d={'flex'} fontSize={'x-small'} color={'fpGrey.500'}>
			{user?.address?.country && (
				<>
					<PointSeparator small /> {user?.address?.country}
				</>
			)}
			<PointSeparator small />
			{formatDate(created_at)}
		</Label>
	</FlexLayout>
);

export default PostedBy;
