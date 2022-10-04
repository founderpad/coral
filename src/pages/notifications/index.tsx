import { PageLayout } from '@/components/layouts';
import { DocumentTitle } from '@/components/shared';
import { useGetUserNotificationsQuery } from '@/generated/api';
import { useAuth } from '@/hooks/auth';
import AuthFilter from '@/utils/AuthFilter';
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import NotificationsLayout from './NotificationsLayout';

const Notifications: NextPage = () => {
	const userId = useAuth().getUser()?.id;

	const { data } = useGetUserNotificationsQuery({
		variables: {
			userId
		}
	});

	return (
		<React.Fragment>
			<Head>
				<meta
					property="og:title"
					content="Founderpad · Notifications"
					key="title"
				/>
				<meta
					property="og:url"
					content="https://app.founderpad.com/notifications"
				/>
				<meta
					property="og:image"
					content="https://founderpad-file-uploads.s3.eu-west-1.amazonaws.com/founderpad-og-image%40256x256.png"
				/>
				<meta property="og:site_name" content="Founderpad" />
				<meta
					property="og:description"
					content="View your notifications"
				/>
			</Head>
			<DocumentTitle title="Notifications" />
			<PageLayout title="Notifications">
				<NotificationsLayout data={data} />
			</PageLayout>
		</React.Fragment>
	);
};

export default AuthFilter(Notifications);
