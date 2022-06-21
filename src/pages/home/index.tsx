import { PageLayout } from '@/components/layouts';
import { DocumentTitle } from '@/components/shared';
import { useCurrentUser } from '@/hooks/auth';
import AuthFilter from '@/utils/AuthFilter';
import { NextPage } from 'next';
import React from 'react';

const Home: NextPage = () => {
	const displayName = useCurrentUser()?.displayName;

	return (
		<React.Fragment>
			<DocumentTitle title="Home" />
			<PageLayout title={`Welcome back, ${displayName}`} />
		</React.Fragment>
	);
};

export default AuthFilter(Home);
