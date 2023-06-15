import { FlexLayout } from '@/components/layouts';
import { BaseLink } from '@/components/links';
import { PointSeparator, UserAvatarDetails } from '@/components/shared';
import { formatDate } from '@/utils/validators';
import React from 'react';
import useIdea from '../query/ideaQuery';
import IdeaActions from './IdeaMenu';
import { useUserData } from '@nhost/react';

export const IdeaUserActions = () => {
	const { idea } = useIdea() ?? {};
	const user = useUserData();

	let publishedName = '';
	publishedName =
		user?.id === idea?.userId
			? 'you'
			: idea?.user
			? idea?.user?.displayName
			: '';

	return (
		<FlexLayout alignItems="center" justifyContent="space-between" mb={4}>
			<UserAvatarDetails
				title={`Published by ${publishedName}`}
				src={idea?.user?.avatarUrl || undefined}
				createdAt={formatDate(idea?.createdAt, true)}
				actions={
					<React.Fragment>
						<PointSeparator small />
						<BaseLink
							title="View user profile"
							fontSize="small"
							href={`/user/${idea?.user?.id}`}
						>
							View profile
						</BaseLink>
					</React.Fragment>
				}
			/>

			{user?.id === idea?.userId && <IdeaActions ideaId={idea?.id} />}
		</FlexLayout>
	);
};

export default IdeaUserActions;
