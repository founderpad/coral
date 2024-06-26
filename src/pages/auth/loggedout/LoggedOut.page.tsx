import AuthLayout from '@/components/layouts/AuthLayout';
import { BaseLink } from '@/components/links';
import NotFound from '@/pages/404';
import { useUserId } from '@nhost/react';
import { NextPage } from 'next';
import React from 'react';

const LoggedOut: NextPage = () => {
	const userId = useUserId();

	if (userId) return <NotFound />;

	return (
		<AuthLayout
			header="Logged out"
			headProps={{
				title: 'Logged out',
				pageSlug: '/loggedout',
				description: 'You have logged out successfully.'
			}}
		>
			<BaseLink
				title="Go to login"
				href="/login"
				fontSize="sm"
				alignSelf="center"
			>
				Go back to login
			</BaseLink>
		</AuthLayout>
	);
};

export default LoggedOut;
