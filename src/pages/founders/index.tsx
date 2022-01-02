import { PageLayout } from 'components/layouts';
import SearchContentGridLayout from 'components/layouts/SearchContentGridLayout';
import { DocumentTitle } from 'components/shared';
import React from 'react';
import AuthFilter from 'utils/AuthFilter';
import FounderSearchForm from './components/FounderSearchForm';
import FoundersContainer from './FoundersContainer';

const Founders = () => (
	<React.Fragment>
		<DocumentTitle title="All founders" />
		<PageLayout title="All founders">
			<SearchContentGridLayout>
				<FounderSearchForm />
				<FoundersContainer />
			</SearchContentGridLayout>
		</PageLayout>
	</React.Fragment>
);

export default AuthFilter(Founders);
