import { StackLayout } from '@/components/layouts';
import { AppDivider, Loading, NoResults } from '@/components/shared';
import React from 'react';
import MessageThreadCard from './components/MessageThreadCard';
import useMessageThreads from './hooks/useMessageThreads';

const MessageThreadsContainer = () => {
	const { data, loading } = useMessageThreads();
	const hasResults = data?.length ?? 0;

	if (loading) return <Loading />;
	if (!loading && hasResults < 1) return <NoResults back />;

	return (
		<StackLayout w="full" spacing={0}>
			{data?.map((thread, index) => (
				<React.Fragment key={thread?.id}>
					<MessageThreadCard {...thread} />
					{index !== data?.length - 1 && <AppDivider />}
				</React.Fragment>
			))}
		</StackLayout>
	);
};

export default MessageThreadsContainer;
