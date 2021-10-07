import { PageLayout } from 'components/layouts';
import { DocumentTitle } from 'components/shared';
import React from 'react';
import AuthFilter from 'utils/AuthFilter';

const User = (): JSX.Element => (
	<React.Fragment>
		<DocumentTitle title="View user" />
		<PageLayout title="View user">User</PageLayout>
	</React.Fragment>
);

export default AuthFilter(User);
