import { CaptionLabel } from 'components/labels';
import { FlexLayout } from 'components/layouts';
import { BaseLink } from 'components/links';
import { PointSeparator } from 'components/shared';
import { TIdea_Preview } from 'generated/api';
import React from 'react';
import { formatDate } from 'utils/validators';

type TProps = Pick<TIdea_Preview, 'user' | 'createdAt'>;

export const PostedBy = ({ user, createdAt }: TProps): JSX.Element => (
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
			color={'gray.400'}
			fontSize={'x-small'}
		>
			{user?.first_name}
		</BaseLink>
		<CaptionLabel d={'flex'}>
			{user.country && (
				<>
					<PointSeparator small /> {user.country}
				</>
			)}
			<PointSeparator small />
			{formatDate(createdAt)}
		</CaptionLabel>
	</FlexLayout>
);

export default PostedBy;