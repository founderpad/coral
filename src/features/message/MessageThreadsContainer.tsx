import { StackLayout } from '@/components/layouts';
import { AppDivider, Loading, NoResults } from '@/components/shared';
import React from 'react';
import { useUserId } from '@nhost/react';
import { useMessageThreads } from './hooks';
import { MessageThreadCard } from '@/features/message/components';

const MessageThreadsContainer = () => {
	const userId = useUserId();
	const { data, loading } = useMessageThreads(userId!);
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
