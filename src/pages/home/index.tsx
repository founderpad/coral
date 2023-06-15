import { PageLayout } from '@/components/layouts';
import { PageHtmlHead } from '@/components/shared';
import AuthFilter from '@/utils/AuthFilter';
import { useUserData } from '@nhost/react';
import { NextPage } from 'next';
import React from 'react';

const Home: NextPage = () => {
	const user = useUserData();

	return (
		<>
			<PageHtmlHead
				title="Home"
				pageSlug="/home"
				description={`Welcome back, ${user?.displayName}`}
			/>
			<PageLayout title={`Welcome back, ${user?.displayName}`} />
		</>
	);
};

export default AuthFilter(Home);
