import AuthLayout from '@/components/layouts/AuthLayout';
import { BaseLink } from '@/components/links';
import { useAuth } from '@/hooks/auth';
import NotFound from '@/pages/404';
import { NextPage } from 'next';
import React from 'react';

const LoggedOut: NextPage = () => {
	const userId = useAuth().getUser()?.id;

	if (userId) return <NotFound />;

	return (
		<AuthLayout
			title="Logged out"
			header="Logged out"
			subheader="You have logged out successfully"
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
