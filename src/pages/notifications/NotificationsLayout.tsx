import { StackLayout } from '@/components/layouts';
import {
	TGetUserNotificationsQuery,
	TNotificationFieldsFragment
} from '@/generated/api';
import React from 'react';
import NotificationItem from './NotificationItem';

const NotificationsLayout = ({
	data
}: {
	data?: TGetUserNotificationsQuery;
}) => (
	<StackLayout spacing={4}>
		{data?.user_notifications?.map(
			(userNotification: TNotificationFieldsFragment) => (
				<NotificationItem
					key={userNotification.id}
					{...userNotification}
				/>
			)
		)}
	</StackLayout>
);

export default NotificationsLayout;
