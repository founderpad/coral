import { StackLayout } from '@components/layouts';
import { useCurrentUser } from '@hooks/auth';
import { useQueryParam } from '@hooks/util';
import React from 'react';
import NewMessage from './NewMessageModal';

const Actions = () => {
	const userId = useQueryParam<string>('id');
	const authUserId = useCurrentUser().id;

	return (
		<StackLayout direction="row">
			{userId !== authUserId && <NewMessage userId={userId} />}
		</StackLayout>
	);
};

export default Actions;
