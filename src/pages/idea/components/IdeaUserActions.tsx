import { FlexLayout } from '@components/layouts';
import { UserAvatarDetails } from '@components/shared';
import IdeaContext from '@context/idea/IdeaContext';
import { useCurrentUser } from '@hooks/auth';
import { formatDate } from '@utils/validators';
import React, { memo, useContext } from 'react';
import IdeaActions from './IdeaMenu';

export const IdeaUserActions = memo(() => {
	const idea = useContext(IdeaContext).data?.idea;
	const auth = useCurrentUser();

	let publishedName = '';
	publishedName =
		auth?.id === idea?.userId
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
});

export default IdeaUserActions;
