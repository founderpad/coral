import { StackLayout } from '@components/layouts';
import { AppDivider, Loading, NoResults } from '@components/shared';
import { useUserMessageThreadsQuery } from '@generated/api';
import { useCurrentUser } from '@hooks/auth';
import React from 'react';
import MessageThreadCard from './components/MessageThreadCard';

const MessageThreadsContainer = () => {
	const { data, loading } = useUserMessageThreadsQuery({
		variables: {
			userId: useCurrentUser().id
		}
	});

	const hasResults = data?.threads?.length ?? 0;
	// const totalThreads = data?.total.aggregate?.count ?? 0;

	if (loading) return <Loading />;
	if (!loading && hasResults < 1) return <NoResults back />;

	return (
		<React.Fragment>
			<StackLayout w="full" spacing={0}>
				{data?.threads.map((thread, index) => (
					<React.Fragment key={thread?.id}>
						<MessageThreadCard {...thread} />
						{index !== data?.threads.length - 1 && <AppDivider />}
					</React.Fragment>
				))}
			</StackLayout>
		</React.Fragment>
	);
};

export default MessageThreadsContainer;
