import { PageLayout } from '@/components/layouts';
import { useGetUserNotificationsQuery } from '@/generated/api';
import AuthFilter from '@/utils/AuthFilter';
import { NextPage } from 'next';
import React from 'react';
import NotificationsLayout from './NotificationsLayout';
import { PageHtmlHead } from '@/components/shared';
import { useUserId } from '@nhost/react';

const Notifications: NextPage = () => {
	const userId = useUserId();

	const { data } = useGetUserNotificationsQuery({
		variables: {
			userId
		}
	});

	return (
		<>
			<PageHtmlHead
				title="Notifications"
				pageSlug="/notifications"
				description="View your notifications."
			/>
			<PageLayout title="Notifications">
				<NotificationsLayout data={data} />
			</PageLayout>
		</>
	);
};

export default AuthFilter(Notifications);
