import { StackLayout } from '@components/layouts';
import { useAuth } from '@hooks/auth';
import { useQueryParam } from '@hooks/util';
import React from 'react';
import NewMessageModal from './NewMessageModal';

const Actions = () => {
	const userId = useQueryParam<string>('id');
	const authUserId = useAuth().user?.id;

	return (
		<StackLayout direction="row">
			{userId !== authUserId && <NewMessageModal userId={userId} />}
		</StackLayout>
	);
};

export default Actions;
