import { PageLayout } from '@/components/layouts';
import { useGetUserNotificationsQuery } from '@/generated/api';
import { useAuth } from '@/hooks/auth';
import AuthFilter from '@/utils/AuthFilter';
import { NextPage } from 'next';
import React from 'react';
import NotificationsLayout from './NotificationsLayout';
import { PageHtmlHead } from '@/components/shared';

const Notifications: NextPage = () => {
	const userId = useAuth().getUser()?.id;

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
