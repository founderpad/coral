import { StackLayout } from '@components/layouts';
import { AppDivider, Loading } from '@components/shared';
import { useUserMessageThreadsQuery } from '@generated/api';
import { useCurrentUser } from '@hooks/auth';
import React from 'react';
import MessageThreadCard from './components/MessageThreadCard';

const MessagesContainer = () => {
	const { data, loading } = useUserMessageThreadsQuery({
		variables: {
			userId: useCurrentUser().id
		}
	});

	if (loading) return <Loading />;

	return (
		<StackLayout w="full" spacing={0}>
			{data?.threads.map((thread, index) => (
				<React.Fragment key={thread?.id}>
					<MessageThreadCard {...thread} />
					{index !== data?.threads.length - 1 && <AppDivider />}
				</React.Fragment>
			))}
		</StackLayout>
	);
};

export default MessagesContainer;
