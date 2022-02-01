import { FlexLayout } from '@components/layouts';
import { UserAvatarDetails } from '@components/shared';
import { useCurrentUser } from '@hooks/auth';
import { formatDate } from '@utils/validators';
import React from 'react';
import useIdea from '../query/ideaQuery';
import IdeaActions from './IdeaMenu';

export const IdeaUserActions = () => {
	const { idea } = useIdea();
	const auth = useCurrentUser();

	let publishedName = '';
	publishedName =
		auth.id === idea?.userId
			? 'you'
			: idea?.user
			? idea?.user?.displayName
			: '';

	return (
		<FlexLayout
			alignItems={'center'}
			justifyContent={'space-between'}
			mb={4}
		>
			<UserAvatarDetails
				rounded={'full'}
				name={`Published by ${publishedName}`}
				src={idea?.user?.avatarUrl ?? ''}
				createdAt={formatDate(idea?.createdAt, true)}
			/>

			{auth?.id === idea?.userId && <IdeaActions ideaId={idea?.id} />}
		</FlexLayout>
	);
};

export default IdeaUserActions;
