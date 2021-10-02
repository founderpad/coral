import PageLayout from 'components/layouts/PageLayout';
import WindowTitle from 'components/shared/WindowTitle';
import { useCurrentUser } from 'hooks/auth';
import AuthFilter from 'utils/AuthFilter';
import React from 'react';

const Dashboard = () => {
	const user = useCurrentUser();

	return (
		<React.Fragment>
			<WindowTitle title="Dashboard" />
			<PageLayout title={`Welcome back, ${user?.first_name}`} />
		</React.Fragment>
	);

	return null;
};

export default AuthFilter(Dashboard);
