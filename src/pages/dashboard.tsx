import { PageLayout } from 'components/layouts';
import { DocumentTitle } from 'components/shared';
import { useCurrentUser } from 'hooks/auth';
import React from 'react';
import AuthFilter from 'utils/AuthFilter';

const Dashboard = () => {
	const firstName = useCurrentUser().first_name;

	return (
		<React.Fragment>
			<DocumentTitle title="Dashboard" />
			<PageLayout title={`Welcome back, ${firstName}`} />
		</React.Fragment>
	);

	return null;
};

export default AuthFilter(Dashboard);
