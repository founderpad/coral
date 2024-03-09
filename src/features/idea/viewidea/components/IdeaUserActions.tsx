import { FlexLayout } from '@/components/layouts';
import { BaseLink } from '@/components/links';
import { AvatarWithDetails } from '@/components/shared';
import { formatDate } from '@/utils/validators';
import React from 'react';
import IdeaActions from './IdeaMenu';
import { useUserData } from '@nhost/react';
import useCachedIdea from '../query/ideaQuery';

export const IdeaUserActions = () => {
	const { idea } = useCachedIdea() ?? {};
	const user = useUserData();

	const publishedName =
		user?.id === idea?.userId ? 'you' : idea?.user?.displayName ?? '';

	return (
		<FlexLayout alignItems="center" justifyContent="space-between" mb={4}>
			<AvatarWithDetails
				src={idea?.user?.avatarUrl}
				title={`Published by ${publishedName}`}
				subtitle={formatDate(idea?.createdAt, true)}
				actions={
					<BaseLink
						title="View user profile"
						fontSize="small"
						href={`/user/${idea?.user?.id}`}
					>
						View profile
					</BaseLink>
				}
				row
			/>

			{user?.id === idea?.userId && <IdeaActions ideaId={idea?.id} />}
		</FlexLayout>
	);
};

export default IdeaUserActions;
