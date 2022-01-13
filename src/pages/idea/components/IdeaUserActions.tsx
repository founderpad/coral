import { FlexLayout } from 'components/layouts';
import { UserAvatarDetails } from 'components/shared';
import IdeaContext from 'context/idea/IdeaContext';
import { useCurrentUser } from 'hooks/auth';
import React, { memo, useContext } from 'react';
import { formatDate } from 'utils/validators';
import IdeaActions from './IdeaMenu';

export const IdeaUserActions = memo(() => {
	const {
		data: { idea }
	} = useContext(IdeaContext);
	const {
		userId,
		createdAt,
		id,
		user: { avatarUrl, displayName }
	} = idea;
	const user = useCurrentUser();

	return (
		<FlexLayout
			alignItems={'center'}
			justifyContent={'space-between'}
			mb={4}
		>
			<UserAvatarDetails
				rounded={'full'}
				name={`Published by ${
					user.id === userId ? 'you' : displayName
				}`}
				src={avatarUrl}
				createdAt={formatDate(createdAt, true)}
			/>

			{user?.id === userId && <IdeaActions ideaId={id} />}
		</FlexLayout>
	);
});

export default IdeaUserActions;
