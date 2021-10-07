import WindowTitle from 'components/shared/WindowTitle';
import { useCurrentUser } from 'hooks/auth';
import AuthFilter from 'utils/AuthFilter';
import React from 'react';
import { PageLayout } from 'components/layouts';

const Dashboard = () => {
	const firstName = useCurrentUser().first_name;

	return (
		<React.Fragment>
			<WindowTitle title="Dashboard" />
			<PageLayout title={`Welcome back, ${firstName}`} />
		</React.Fragment>
	);

	return null;
};

export default AuthFilter(Dashboard);
