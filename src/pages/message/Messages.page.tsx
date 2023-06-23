import { PageLayout } from '@/components/layouts';
import AuthFilter from '@/utils/AuthFilter';
import { NextPage } from 'next';
import React from 'react';
import MessagesContainer from './MessageThreadsContainer';
import { PageHtmlHead } from '@/components/shared';

const Messages: NextPage = () => (
	<>
		<PageHtmlHead
			title="All messages"
			pageSlug="/messages"
			description="View all your messages with other users."
		/>
		<PageLayout title="Your messages" p={4}>
			<MessagesContainer />
		</PageLayout>
	</>
);

export default AuthFilter(Messages);
