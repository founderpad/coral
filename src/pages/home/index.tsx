import { PageLayout } from '@/components/layouts';
import { PageHtmlHead } from '@/components/shared';
import { useCurrentUser } from '@/hooks/auth';
import AuthFilter from '@/utils/AuthFilter';
import { NextPage } from 'next';
import React from 'react';

const Home: NextPage = () => {
	const displayName = useCurrentUser()?.displayName;

	return (
		<>
			<PageHtmlHead
				title={`Welcome back, ${displayName}`}
				pageSlug="/home"
				description={`Welcome back, ${displayName}`}
			/>
			<PageLayout title={`Welcome back, ${displayName}`} />
		</>
	);
};

export default AuthFilter(Home);
