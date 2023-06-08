import { PageLayout } from '@/components/layouts';
import { PageHtmlHead } from '@/components/shared';
import { useCurrentUser } from '@/hooks/auth';
import AuthFilter from '@/utils/AuthFilter';
import { NextPage } from 'next';
import React from 'react';

const Dashboard: NextPage = () => {
	const displayName = useCurrentUser()?.displayName;

	return (
		<>
			<PageHtmlHead
				title="Dashboard"
				pageSlug="/dashboard"
				description="Your dashboard"
			/>
			<PageLayout title={`Welcome back, ${displayName}`} />
		</>
	);
};

export default AuthFilter(Dashboard);
