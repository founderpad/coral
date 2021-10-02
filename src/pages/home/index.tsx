import PageLayout from 'components/layouts/PageLayout';
import WindowTitle from 'components/shared/WindowTitle';
import { useCurrentUser } from 'hooks/auth';
import React from 'react';
import AuthFilter from 'utils/AuthFilter';

const Home = (): JSX.Element => {
	const user = useCurrentUser();

	return (
		<React.Fragment>
			<WindowTitle title="Home" />
			<PageLayout title={`Welcome back, ${user?.first_name}`} />
		</React.Fragment>
	);
};

export default AuthFilter(Home);
