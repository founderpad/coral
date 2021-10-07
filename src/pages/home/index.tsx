import { PageLayout } from 'components/layouts';
import { DocumentTitle } from 'components/shared';
import { useCurrentUser } from 'hooks/auth';
import React from 'react';
import AuthFilter from 'utils/AuthFilter';

const Home = (): JSX.Element => {
	const firstName = useCurrentUser().first_name;

	return (
		<React.Fragment>
			<DocumentTitle title="Home" />
			<PageLayout title={`Welcome back, ${firstName}`} />
		</React.Fragment>
	);
};

export default AuthFilter(Home);
