import { CaptionLabel } from 'components/labels';
import { FlexLayout } from 'components/layouts';
import { BaseLink } from 'components/links';
import { PointSeparator } from 'components/shared';
import { TIdea_Preview } from 'generated/api';
import React from 'react';
import { formatDate } from 'utils/validators';

type TProps = Pick<TIdea_Preview, 'idea_user' | 'createdAt'>;

export const PostedBy = ({ idea_user, createdAt }: TProps): JSX.Element => (
	<FlexLayout
		position={'relative'}
		alignItems={'center'}
		lineHeight={'0.875rem'}
		fontSize={{ base: '11px', sm: 'xs' }}
	>
		<BaseLink
			href={`/user/${idea_user?.id}`}
			title={'The user who posted this idea'}
			_hover={{ color: 'gray.700' }}
			color={'gray.400'}
			fontSize={'x-small'}
		>
			{idea_user?.first_name}
		</BaseLink>
		<CaptionLabel d={'flex'}>
			{idea_user.country && (
				<>
					<PointSeparator small /> {idea_user.country}
				</>
			)}
			<PointSeparator small />
			{formatDate(createdAt)}
		</CaptionLabel>
	</FlexLayout>
);

export default PostedBy;
