import { PageLayout } from '@/components/layouts';
import AuthFilter from '@/utils/AuthFilter';
import { NextPage } from 'next';
import React from 'react';
import { PageHtmlHead } from '@/components/shared';
import { MessageThreadsContainer } from '@/features/message';

const Messages: NextPage = () => (
	<>
		<PageHtmlHead
			title="All messages"
			pageSlug="/messages"
			description="View all your messages with other users."
		/>
		<PageLayout title="Your messages" p={4}>
			<MessageThreadsContainer />
		</PageLayout>
	</>
);

export default AuthFilter(Messages);
